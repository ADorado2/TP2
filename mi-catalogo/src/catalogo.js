const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-AR`;
async function cargarPeliculas() {
  const respuesta = await fetch(URL);
  const datos = await respuesta.json();
  console.log(datos);
  console.log(datos.results);
  console.log(datos.results[0].title);
  const tarjeta = document.createElement("div");
  const titulo = document.createElement("h3");
  titulo.textContent = datos.results[0].title;
  tarjeta.appendChild(titulo);
  const contenedor = document.getElementById("contenedor-peliculas");
  contenedor.appendChild(tarjeta);
}
cargarPeliculas();

document.querySelector("#app").innerHTML = `
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
  <div id="contenedor-peliculas"></div>
  </main>
<footer>
  <p>© 2026 CartelerAPP - Programación 3 - Axel Dorado - TMDB API.</p>
</footer>
`;
