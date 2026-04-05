/** @format */

const botones = document.querySelectorAll(".btn");
const contador = document.getElementById("contador");

let total = 0;

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    total++;
    contador.textContent = total;
  });
});
