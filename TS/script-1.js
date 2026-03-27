/** @format */
// querySelector para seleccionar el <h1> y el botón.
// addEventListener para escuchar el evento de clic en el botón.
// textContent para cambiar el texto del <h1>.

// eje 1- Botón que cambia el texto
// seleccionamos el h1 y el boton primero
const title = document.querySelector("#title");
const button = document.querySelector("#button");

// añadimos el button un addEventListner para cambiar al hacer click
button.addEventListener("click", function () {
  title.textContent = "Bienvenido a mi pagina";
});

// title2
let title2 = document.querySelector("#title2");
let button2 = document.querySelector("#button2");

button2.addEventListener("click", function () {
  title2.textContent = "Ahora tu edad";
});

// eje 2- Cambiar color con botón "classList.toggle()"
//Si el elemento NO tiene la clase especificada, la añade.
// Si el elemento YA tiene la clase especificada, la elimina.

let caja = document.querySelector("#caja");
let button3 = document.querySelector("#button3");

button3.addEventListener("click", function () {
  caja.classList.toggle("rojo");
});

let caja1 = document.querySelector("#caja1");
let button4 = document.querySelector("#button4");

button4.addEventListener("click", function () {
  caja1.classList.toggle("white");
});

// eje 3— Mini contador

//Variables (let contador = 0)
// Actualizar DOM
// Eventos

// Definimos la variable contador y la inicializamos en 0
let contador = 0;

const contadorElement = document.querySelector("#contador");
const mas = document.querySelector("#mas");
const menos = document.querySelector("#menos");

mas.addEventListener("click", function () {
  contador++;
  contadorElement.textContent = contador;
});

menos.addEventListener("click", function () {
  contador--;
  contadorElement.textContent = contador;
});

//v2
let contador1 = 0;

const contador1Element = document.querySelector("#contador1");
const plus = document.querySelector("#plus");
const rest = document.querySelector("#rest");

plus.addEventListener("click", function () {
  contador1++;
  contador1Element.textContent = contador1;
});

rest.addEventListener("click", function () {
  contador1--;
  contador1Element.textContent = contador1;
});

// eje 4- Mostrar / ocultar contenido
let paragraph = document.querySelector("#paragraph");
let button5 = document.querySelector("#button5");

button5.addEventListener("click", function () {
  paragraph.classList.toggle("mostrar");

  // cambiamos el texto segun el estado
  if (paragraph.classList.contains("mostrar")) {
    button5.textContent = "Ocultar";
  } else {
    button5.textContent = "Mostrar";
  }
});

// v2
let paragraph1 = document.querySelector("#paragraph1");
let button6 = document.querySelector("#button6");

button6.addEventListener("click", function () {
  paragraph1.classList.toggle("enseñalo");

  if (paragraph1.classList.contains("enseñalo")) {
    button6.textContent = "Ocultame";
  } else {
    button6.textContent = "Enseñame";
  }
});

// eje 5- Mini formulario interactivo
let inputNombre = document.querySelector("#inputNombre");
let button7 = document.querySelector("#button7");
const mensaje = document.querySelector("#mensaje");

button7.addEventListener("click", function () {
  let nameWrite = inputNombre.value;
  mensaje.textContent = "Hola " + nameWrite;
});



