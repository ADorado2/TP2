# 🍿 CartelerAPP

CartelerAPP es una aplicación web que permite explorar un catálogo de películas utilizando la API de The Movie Database (TMDB).

Características

- Página de inicio con descripción del proyecto.
- Catálogo de películas obtenido desde la API.
- Vista de imágenes de cada película con su título y su año de estreno.
- Búsqueda de películas por título.
- Filtro de películas por género.

Ejecución
Se utiliza VITE desde la terminal y se ejecutan los siguientes comandos:
-npm install
-npm run dev
se muestra una direccion local (http://localhost:5173/)
abrir en el navegador

Configuración de la API

Para utilizar el catálogo es necesario contar con una clave de API de The Movie Database (TMDB) https://www.themoviedb.org/.

1. Crear una cuenta en TMDB y obtener una clave de API.
2. Crear un archivo llamado `.env` en la carpeta principal del proyecto.
3. Agregar la siguiente variable:

VITE_TMDB_API_KEY=tu_clave_de_tmdb

4. Reemplazar `tu_clave_de_tmdb` por la clave obtenida.
   al
