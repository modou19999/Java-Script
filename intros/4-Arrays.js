/** @format */

// Arrays - Métodos Importantes

let numeros = [1, 2, 3, 4, 5];
// Agregar elementos
numeros.push(6); // Al final [1,2,3,4,5,6]
numeros.unshift(0); // Al inicio [0,1,2,3,4,5,6]
// Eliminar elementos
numeros.pop(); // Elimina el último
numeros.shift(); // Elimina el primero
// Métodos útiles
numeros.length; // Longitud del array
numeros.indexOf(3); // Posición del elemento
numeros.includes(4); // true/false si existe
// Métodos de iteración
numeros.forEach((num) => console.log(num));
let dobles = numeros.map((num) => num * 2);
let pares = numeros.filter((num) => num % 2 === 0);
let suma = numeros.reduce((acc, num) => acc + num, 0);
