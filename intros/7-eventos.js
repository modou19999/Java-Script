/** @format */
// Eventos

// Manejar Eventos
// Click en botón
let boton = document.querySelector("#miBoton");

boton.addEventListener("click", function () {
  alert("¡Botón clickeado!");
});

// Eventos comunes
elemento.addEventListener("mouseover", () => {}); // Pasar el mouse
elemento.addEventListener("keydown", (e) => {}); // Tecla presionada
elemento.addEventListener("submit", (e) => {}); // Enviar formulario
elemento.addEventListener("change", (e) => {}); // Cambio en input
