import "./style.css";

document.querySelector("#app").innerHTML = `
<header>
  <h1>🍿 CARTELERAPP 🍿</h1>
  <nav>
    <a href="index.html">Inicio</a>
    <a href="catalogo.html">Catálogo</a>
  </nav>
</header>

<section class="hero">
  <div class="hero-contenido">
    <h2>Descubrí tu próxima película</h2>
    <p>Explorá películas, géneros y encontrá tu próxima historia.</p>
    </div>
</section>
  <div class="hero-boton"> 
    <a href="catalogo.html">Ver catálogo</a>
  </div>
    <footer>
  <p>© 2026 CartelerAPP - Programación 3 - Axel Dorado - TMDB API.</p>
</footer>
`;
