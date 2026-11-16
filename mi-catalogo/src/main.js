import "./style.css";

document.querySelector("#app").innerHTML = `
<header>
  <h1>🍿 CARTELERAPP 🍿</h1>
  <nav>
    <a href="index.html">Inicio</a>
    <a href="catalogo.html">Catálogo</a>
  </nav>
</header>

<main>
  <section class="hero">
    <div class="hero-contenido">
      <h2>Descubrí tu próxima película</h2>
      <p>Explorá películas, géneros y encontrá tu próxima historia.</p>
    </div>
  </section>

  <section class="descripcion">
    <h2>Sobre CartelerAPP</h2>
    <p>
      CartelerAPP es un catálogo de películas que te permite descubrir
      los títulos más populares, conocer sus géneros y explorar nuevas
      historias.
    </p>
  </section>

  <div class="hero-boton">
    <a href="catalogo.html">Ver catálogo</a>
  </div>
</main>

<footer>
  <p>© 2026 CartelerAPP - Programación 3 - Axel Dorado - TMDB API.</p>
</footer>
`;
