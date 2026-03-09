/** @format */

// DOM - Manipulación del HTML
// Seleccionar Elementos

// Por ID
let elemento = document.getElementById("miId");
// Por clase
let elementos = document.getElementsByClassName("miClase");
// Por selector CSS
let element = document.querySelector(".clase");
let elements = document.querySelectorAll("div.clase");

// Modificar Elementos

// Cambiar contenido
elemento.textContent = "Nuevo texto";
elemento.innerHTML = "<strong>Texto en negrita</strong>";
// Cambiar estilos
elemento.style.color = "red";
elemento.style.backgroundColor = "blue";
// Agregar/Quitar clases
elemento.classList.add("nuevaClase");
elemento.classList.remove("viejaClase");
elemento.classList.toggle("activo");
