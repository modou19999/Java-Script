/** @format */

const input = document.getElementById("inputTarea");
const btn = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

btn.addEventListener("click", () => {
  const texto = input.value;

  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;

  li.addEventListener("click", () => {
    li.classList.toggle("completada");
  });

  // eliminar con doble click
  li.addEventListener("dbclick", () => {
    li.remove();
  });

  lista.appendChild(li);
  input.value = "";
});
