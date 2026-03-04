/** @format */

// Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.

{
  function number(num) {
    if (num <= 1) {
      console.log(`${num} no es un numero primo`);
      return;
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        console.log(`${num} no es un numero primo`);
        return;
      }
    }
    console.log(`${num} si es un numero parimo`);
  }

  number(5);
}

{
  function esPrimo(numero) {
    if (numero <= 1) {
      console.log(`${numero} no es un número primo`);
      return;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        console.log(`${numero} no es un número primo`);
        return;
      }
    }

    console.log(`${numero} es un número primo`);
  }

  esPrimo(9);
}
