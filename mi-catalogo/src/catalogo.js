import "./style.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-AR`;

const URL_GENEROS = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-AR`;

async function cargarPeliculas() {
  try {
    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
      throw new Error("No se pudieron cargar las películas");
    }

    const datos = await respuesta.json();

    // Fondo para catálogo
    const fondo = document.getElementById("fondo-peliculas");

    datos.results.forEach((pelicula) => {
      if (pelicula.poster_path) {
        const imagenFondo = document.createElement("img");

        imagenFondo.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
        imagenFondo.alt = "";

        fondo.appendChild(imagenFondo);
      }
    });

    const respuestaGeneros = await fetch(URL_GENEROS);

    if (!respuestaGeneros.ok) {
      throw new Error("No se pudieron cargar los géneros");
    }

    const datosGeneros = await respuestaGeneros.json();

    const filtroGenero = document.getElementById("filtro-genero");

    datosGeneros.genres.forEach((genero) => {
      const opcion = document.createElement("option");
      opcion.value = genero.id;
      opcion.textContent = genero.name;

      filtroGenero.appendChild(opcion);
    });

    const buscador = document.getElementById("buscar-titulo");

    function aplicarFiltros() {
      const texto = buscador.value.toLowerCase();
      const generoSeleccionado = Number(filtroGenero.value);

      const peliculasFiltradas = datos.results.filter((pelicula) => {
        const coincideTitulo = pelicula.title.toLowerCase().includes(texto);

        const coincideGenero =
          generoSeleccionado === 0 ||
          pelicula.genre_ids.includes(generoSeleccionado);

        return coincideTitulo && coincideGenero;
      });

      mostrarPeliculas(peliculasFiltradas);
    }

    buscador.addEventListener("input", aplicarFiltros);
    filtroGenero.addEventListener("change", aplicarFiltros);

    mostrarPeliculas(datos.results);

    const mensajeCarga = document.getElementById("mensaje-carga");
    mensajeCarga.style.display = "none";
  } catch (error) {
    const mensajeCarga = document.getElementById("mensaje-carga");
    mensajeCarga.textContent = error.message;
    mensajeCarga.style.display = "block";
  }
}

function mostrarPeliculas(peliculas) {
  const contenedor = document.getElementById("contenedor-peliculas");

  contenedor.innerHTML = "";

  peliculas.forEach((pelicula) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.title;

    const imagen = document.createElement("img");
    imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
    imagen.alt = pelicula.title;

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(imagen);
    contenedor.appendChild(tarjeta);
  });
}

document.querySelector("#app").innerHTML = `
<div id="fondo-peliculas"></div>
<header>
  <h1>CartelerAPP</h1>
  <nav>
    <a href="index.html">Inicio</a>
    <a href="catalogo.html">Catálogo</a>
  </nav>
</header>
<main>
  <h2>Nuestro catálogo de películas</h2>
  <p>Explorá el catálogo y disfruta de tu película favorita.</p>

  <input
    type="text"
    id="buscar-titulo"
    placeholder="Buscar película por título..."
  />

  <select id="filtro-genero">
    <option value="">Todas las categorías</option>
  </select>

  <p id="mensaje-carga">Cargando películas...</p>
  <div id="contenedor-peliculas"></div>
</main>
<footer>
  <p>© 2026 CartelerAPP - Programación 3 - Axel Dorado - TMDB API.</p>
</footer>
`;

cargarPeliculas();
