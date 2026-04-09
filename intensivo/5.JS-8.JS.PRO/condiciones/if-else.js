let sabores = ["manzana", "banana", "mango", "limón", "piña"];

// prompt()
//  es una función de JavaScript que muestra una ventana emergente
// en el navegador para que el usuario ingrese un texto. Es muy útil para
// pedirle algo al usuario de manera interactiva.

// .join()
// es un método de los arreglos (arrays) en JavaScript que convierte un
// arreglo en un solo string (texto), separando los elementos con lo
// que tú quieras.

let elegido = prompt(`Elige un sabor: ${sabores.join(", ")}`);

if (sabores.includes(elegido)) {
  console.log(`genial! Elegiste ${elegido} 🍸`);
} else {
  console.log("Ese sabor no es incluido");
}

{
let sabores = ["manzana", "banana", "mango", "limón", "piña"];

let elegido = prompt(`Elige un sabor: ${sabores.join(", ")}`);

if (sabores.includes(elegido)) {
  console.log(`¡Genial! Elegiste ${elegido} 🍹`);
} else {
  console.log("Ese sabor no está en la lista 😅");
}}