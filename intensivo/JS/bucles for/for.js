/** @format */

// for sirve para repetir algo varias veces automáticamente.
{ // esto es un ejemplo defor of

  let frutas = ["manzana", "pera", "naranja", "plátano"];
  for (let fruta of frutas) {
    console.log(fruta);
  }
  let iterable = [10, 20, 30, 40, 50];

  for (let value of iterable) {
    value -= 1;
    console.log(value);
  }
}

for (let i = 8; i > 0; i--) {
  console.log(`Quedan ${i} i`);
}
