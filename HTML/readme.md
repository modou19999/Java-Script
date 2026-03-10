# sombra en en body

body {
margin: 0;
padding: 0;
position: relative; /_ Necesario para que ::before se posicione relativo al body _/
}

body::before {
content: "";
position: fixed; /_ Fijo sobre toda la pantalla _/
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none; /_ Para que no bloquee clics _/
z-index: 1000; /_ Encima del contenido _/
box-shadow: inset 200px 0 900px rgba(0, 0, 0, 0.5); /_ Sombra “por encima” _/
}
