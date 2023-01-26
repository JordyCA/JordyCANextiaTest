# Nextify Coding Challenge 🎧 &nbsp; ![hard]

<strong> Notas generales </strong>

En este proyecto se utilizó context para el token y los datos del usuario.


Se separaron las diferentes peticiones en otro archivo javascript para manejar las peticiones.


De momento maneje las peticiones en el componente principal de Discover. Posiblemente como mejora es que se pueda manejar la petición del token en un nivel más arriba y guardar esa información en el context correspondiente.


Se implemento las bases de react-router-dom para el manejo de rutas del apartado de Nextify. 


No es necesario logearse de manera externa con spotify solo se requiere el clientId, clientSecret y el account. El último parámetro es por que OAuth no funciona con el servicio de la api /me de spotify.