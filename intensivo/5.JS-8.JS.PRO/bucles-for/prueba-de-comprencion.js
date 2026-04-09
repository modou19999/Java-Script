/** @format */

// {
//   // de 1 al 5

//   let limite = 5;
//   for (let i = 1; i <= limite; i++) {
//     console.log("Termina en 5", i);
//   }
// }

// {
//   // cuenta solo los pares
//   for (let i = 0; i < 10; i++) {
//     console.log("cuenta solo los pares", i++);
//   }
// }

// {
//   // cuenta hasta 5
//   let limite = 1;
//   while (limite <= 5) {
//     console.log("cuenta hasta 5", limite);
//     limite++;
//   }
// }

// {
//   // cuenta al reves
//   let limite = 5;
//   while (limite > 0) {
//     console.log("cuenta al reves", limite);
//     limite--;
//   }
// }

{
  // eje1
  let numeros = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(numeros[i]);
    }
  }
}

{
  // eje2

  let edades = [15, 22, 17, 30, 18];
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
      console.log("Es mayor de edad", edades[i]);
    } else {
      console.log("Es menor de edad", edades[i]);
    }
  }
}

{
  // eje3
  let precios = [10, 25, 5, 50, 30];

  for (let i = 0; i < precios.length; i++) {
    if (precios[i] > 20) {
      console.log("Es mayor o igual a 20", precios[i]);
    }
  }
}
