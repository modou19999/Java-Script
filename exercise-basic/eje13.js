/** @format */

//Crea una función que imprima por consola la tabla de multiplicar
// de un número introducido como parámetro.

{
  function num(number) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }

  num(20);
  num(5);
  // puedes poner las veces que deses
  //   num();
  //   num();
  //   num();
  //   num();
  //   num();
}

{
  function number(num) {
    for (let i = 9; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }
  number(8);
}
