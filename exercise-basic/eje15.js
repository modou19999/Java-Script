/** @format */
// Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.

import promptSync from "prompt-sync";
const prompt = promptSync();

function randomNumber() {
  return Math.ceil(Math.random() * 10);
}

function game() {
  const name = prompt("Dime tu nombre? ");
  console.log(`Hola ${name}`);
  let n = prompt("Dime un número entero del 1 al 10? ");
  n = Number(n);
  if (isNaN(n)) {
    console.log("Eso no es un número");
    return;
  }
  if (Math.trunc(n) !== n) {
    console.log("El número no es entero");
    return;
  }
  if (n < 1 || n > 10) {
    console.log("El número entero no es válido");
    return;
  }
  // console.log(n);
  const randonN = randomNumber();
  // console.log(randonN)
  if (n === randonN) {
    console.log(`Muy bien ${name}`);
  } else {
    console.log(`Lo siento ${name}, el número correcto era ${randonN}`);
  }
}

game();
