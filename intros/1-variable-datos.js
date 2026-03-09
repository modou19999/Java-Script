/** @format */
// VARIABLES

// Tres formas de declarar variables
let nombre = "Juan"; // Variable que puede cambiar
const edad = 25; // Constante (no cambia)
var ciudad = "Madrid"; // Forma antigua (evitar usar)

// TIPOS DE DATOS
// Números
let entero = 42;
let decimal = 3.14;

// Strings (texto)
let texto = "Hola";
let texto2 = "Mundo";
let texto3 = `Hola ${nombre}`; // Template literals

// Booleanos
let verdadero = true;
let falso = false;

// Arrays (listas)
let frutas = ["manzana", "pera", "uva"];
let empresa = ["ANOVO", "ICP", "SERPASAT"];

// Objetos
let persona = {
  nombre: "Ana",
  edad: 30,
  activo: true,
};

// Undefined y Null
let sinDefinir; // undefined
let vacio = null; // null

/*Operadores;
  Aritméticos: javascript; */

let suma = 5 + 3; // 8
let resta = 10 - 4; // 6
let multiplicacion = 3 * 4; // 12
let division = 20 / 5; // 4
let modulo = 10 % 3; // 1
let potencia = 2 ** 3; // 8
// Comparación:

5 == "5"; // true (igual valor)
5 === "5"; // false (igual valor Y tipo)
5 != 3; // true (diferente)
5 !== "5"; // true (diferente valor O tipo)
5 > 3; // true
5 < 10; // true
5 >= 5; // true
5 <= 4; // false
