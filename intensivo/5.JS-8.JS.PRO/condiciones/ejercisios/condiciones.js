/** @format */

// control de acceso sala

// if (edad < 0) {
//   console.log("Edad inválida");
// }

{
  let edad = 22;

  if (edad < 16) {
    console.log("No puedes entrar");
  } else if (edad < 18) {
    console.log("Puedes entrar con un adulto");
  } else if (edad === 18) {
    console.log("Justo en la edad, puedes entrar");
  } else if (edad > 18) {
    console.log("Puedes entrar sin problema");
  }
}

// función para controlar el acceso a la sala
{
  function accesoSala(edad) {
    if (edad < 16) {
      console.log("No puedes entrar");
    } else if (edad < 18) {
      console.log("Puedes entrar con un adulto");
    } else if (edad === 18) {
      console.log("Justo en la edad, puedes entrar");
    } else {
      console.log("Puedes entrar sin problema");
    }
  }

  accesoSala(15);
  accesoSala(16);
  accesoSala(18);
  accesoSala(22);
}