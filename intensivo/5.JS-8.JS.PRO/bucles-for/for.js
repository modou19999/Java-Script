/** @format */

// for sirve para repetir algo varias veces automáticamente.
{
  // esto es un ejemplo defor of

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

{
  for (let i = 8; i > 0; i--) {
    console.log(`Quedan ${i} i`);
  }
}

{
  // cual sabor te gustaría probar
  let sabores = ["manzana", "banana", "mango", "limón", "piña"];

  for (let i = 0; i <= sabores.length; i++) {
    console.log("¿Cual sabor del array te gustaría probar?", sabores[0]);
  }
}

// forEach recorrer array
{
  let sabores = ["manzana", "banana", "mango", "limón", "piña"];

  sabores.forEach((sabor) => {
    console.log("¿Cual sabor te gustaria probar?", sabor);
  });
}

// Recorremos con forEach y mostramos mensaje avanzado
// sabores.forEach((sabor, index) => {
//   console.log(`Opción ${index + 1}: ${sabor} ${emojis[sabor]} – ¿Te gustaría probarlo?`);
// });

{
  let sabores = ["manzana", "banana", "mango", "coco", "piña"];

  // Creamos un objeto que asocia cada sabor con un emoji
  let emojis = {
    manzana: "🍏",
    banana: "🍌",
    mango: "🥭",
    coco: "🥥",
    piña: "🍍",
  };

  // Recorremos con forEach y mostramos mensaje avanzado
  sabores.forEach((sabor, index) => {
console.log(`opcion ${index + 1}: ${sabor} ${emojis[sabor]}`)
  })

}
