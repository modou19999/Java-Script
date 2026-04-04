/** @format */

// switch es una estructura de control que permite ejecutar diferentes bloques de código según el valor de una expresión. Es una alternativa a las múltiples sentencias if-else, y puede ser más legible cuando se tienen muchas condiciones basadas en el mismo valor.
{
  let dia = 1;

  switch (dia) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miercoles");
      break;
    default:
      console.log("Otro día");
  }
}

{
  function diaSemana(dia) {
    switch (dia) {
      case 1:
        console.log("Lunes");
        break;
      case 2:
        console.log("Martes");
        break;
      case 3:
        console.log("Miercoles");
        break;
      default:
        console.log("Otro día");
    }
  }

  diaSemana(7);
}

{
  function menu(opciones) {
    switch (opciones) {
      case "Hamburguesa":
        console.log("Has pedido Hamburguesa");
        break;
      case "Pizza":
        console.log("Has pedido Pizza");
        break;
      case "Arroz":
        console.log("Has pedido Arroz");
        break;
      default:
        console.log("No esta en el menu");
    }
  }

  menu("Pizza");
  menu("sushi");
}
