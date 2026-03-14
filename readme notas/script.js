
{
    /*----1️⃣ Variables
 En JavaScript se crean con: */

const // → cuando el valor no va a cambiar
let // → cuando sí puede cambiar
var // → ya casi no se usa (evítalo)

var name = "Pepe"
const age = 22
let job = "Madrid"
job = "Barcelona"

// name → es el nombre de la variable
// El valor "Pepe" es un string

// Operador de asignación( = )
// El igual (=) asigna un valor a la variable.

}

{
//------4️⃣ Tipos de datos básicos
String (texto)
name = "Pepe"
Number (número)
age = 22;

// Boolean (verdadero o falso)
isStudent = true;
isOnline = false;

// Null Significa que la variable está vacía intencionalmente.
car = null;

// Undefined Significa que la variable existe pero no tiene valor todavía.



let name = "Pepe";     // string
let age = 22;          // number
let isStudent = true;  // boolean
let car = null;        // null
let price;             // undefined

}

// scope
{
    /* Estos son 5 conceptos de JavaScript que cuando los entiendes, casi todo empieza a tener sentido 👨‍💻*/ 

// 1️⃣ Scope (alcance)
//--- Es dónde se puede usar una variable.

let name = "Pepe";

function saludo() {
  let age = 22;
}

name // → se puede usar fuera
age // → solo existe dentro de la función
// Las variables tienen zona de vida.
}


{
 Functions (funciones)//Una función es un bloque de código que hace algo cuando la llamas.

function saludar() {
  console.log("Hola");
}

saludar();

// Sirven para reutilizar código.
}


//---3️⃣ Arrays

{
    //---3️⃣ Arrays Un array guarda varios valores. ( [] esto es un array )

let frutas = ["manzana", "pera", "plátano"];

// Acceder a un elemento:

frutas[0]; // manzana
}

// 4️⃣ Objects
{
    //Objects Un objeto guarda información organizada. ( {} esto es el objeto )

let persona = {
  nombre: "Pepe",
  edad: 22,
  ciudad: "Madrid"
};

// Acceder:

persona.nombre
}


// 5️⃣ Condicionales
{
    // Condicionales Sirven para tomar decisiones.

let age = 20;

if (age >= 18) {
  console.log("Eres mayor de edad");
}
// else (hay que ver que es)
}


// 💡 La clave real de JavaScript:
{
// 💡 La clave real de JavaScript:
// Si dominas bien:

variables

funciones

arrays

objetos // Un objeto guarda información organizada.

condicionales //Condicionales Sirven para tomar decisiones.

// 👉 ya entiendes 70-80% del lenguaje.
}
// Si quieres, te enseño también los 3 conceptos que separan a un programador junior de uno bueno en JavaScript (closure, async y prototipos) de forma muy fácil de entender.

// Por ahora hazme de le misma manera con if else bucles for for in fir ech fir off maps sets break for filter find dom+events async/away+fetch interfaces clases + pop

// Te lo pongo igual de simple y ordenado, como estabas estudiando 👨‍💻

// JavaScript conceptos
// 1️⃣ If / Else

// Sirve para tomar decisiones.

// let age = 20;

// if (age >= 18) {
//   console.log("Mayor de edad");
// } else {
//   console.log("Menor de edad");
// }

// if → si se cumple la condición

// else → si no se cumple

// Bucles
// 2️⃣ For

// Sirve para repetir código varias veces.

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// i → contador

// se repite hasta que la condición no se cumple

// 3️⃣ For...in

// Sirve para recorrer propiedades de un objeto.

// let persona = {
//   nombre: "Pepe",
//   edad: 22
// };

// for (let clave in persona) {
//   console.log(clave);
// }
// 4️⃣ For...of

// Sirve para recorrer arrays.

// let frutas = ["manzana", "pera", "plátano"];

// for (let fruta of frutas) {
//   console.log(fruta);
// }
// 5️⃣ forEach

// Ejecuta una función por cada elemento del array.

// let numeros = [1,2,3];

// numeros.forEach(num => {
//   console.log(num);
// });
// Arrays avanzados
// 6️⃣ map()

// Crea un nuevo array transformado.

// let numeros = [1,2,3];

// let doble = numeros.map(n => n * 2);

// Resultado:

// [2,4,6]
// 7️⃣ filter()

// Sirve para filtrar elementos.

// let edades = [15,20,30];

// let mayores = edades.filter(e => e >= 18);

// Resultado:

// [20,30]
// 8️⃣ find()

// Encuentra el primer elemento que cumple condición.

// let edades = [15,20,30];

// let resultado = edades.find(e => e > 18);

// Resultado:

// 20
// Sets y Maps
// 9️⃣ Set

// Guarda valores únicos (sin duplicados).

// let numeros = new Set([1,2,2,3]);

// Resultado:

// {1,2,3}
// 🔟 Map

// Guarda pares clave → valor.

// let mapa = new Map();

// mapa.set("nombre", "Pepe");
// mapa.set("edad", 22);
// Control de bucles
// break

// Sirve para detener un bucle.

// for (let i = 0; i < 10; i++) {

//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }
// DOM
// DOM + Events

// El DOM permite modificar HTML desde JavaScript.

// let boton = document.querySelector("button");

// boton.addEventListener("click", () => {
//   console.log("Click!");
// });

// querySelector → selecciona elemento

// addEventListener → escucha eventos

// Async
// async / await

// Sirve para trabajar con código asíncrono.

// async function cargarDatos() {
//   let respuesta = await fetch("https://api.com");
// }

// async → función asíncrona

// await → espera respuesta

// fetch

// Sirve para pedir datos a una API.

// fetch("https://api.com")
//   .then(res => res.json())
//   .then(data => console.log(data));
// Clases
// class

// Sirve para crear objetos más organizados.

// class Persona {

//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

// }
// Interfaces (TypeScript)

// Sirve para definir la forma de un objeto.

// interface Persona {
//   nombre: string
//   edad: number
// }
// Métodos de arrays
// pop()

// Elimina el último elemento del array.

// let frutas = ["manzana","pera","plátano"];

// frutas.pop();

// Resultado:

// ["manzana","pera"]
