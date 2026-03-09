/** @format */
/* Estructuras de Control
Condicionales */

// If / Else
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else if (edad >= 13) {
  console.log("Eres adolescente");
} else {
  console.log("Eres niño");
}

// Switch:

let dia = 3;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}

// Bucles For:

// Bucle clásico
for (let i = 0; i < 5; i++) {
  console.log(`Número: ${i}`);
}
// For...of (para arrays)
let colores = ["rojo", "verde", "azul"];
for (let color of colores) {
  console.log(color);
}
// While:

let contador = 0;
while (contador < 3) {
  console.log(`Contador: ${contador}`);
  contador++;
}

// Do...While:

let numero = 0;
do {
  console.log(`Número: ${numero}`);
  numero++;
} while (numero < 3);
