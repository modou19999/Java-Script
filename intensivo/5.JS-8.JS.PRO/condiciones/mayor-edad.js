/** @format */

function mayorEdad(edad) {
  if (edad < 16) {
    console.log("Tienes venir con un adulto");
  } else if (edad < 18) {
    console.log("Eres menor de edad  necesitas permiso de tus padres");
  } else if (edad === 18) {
    console.log("tienes justo la edad necesaria");
  } else {
    console.log("Eres mayor de edad");
  }
}
mayorEdad();
