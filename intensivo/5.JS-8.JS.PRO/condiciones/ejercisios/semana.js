/** @format */

{
  //     EJERCICIOS switch
  // 🟢 Ejercicio 4 (fácil)
  // Función diaSemana(num):
  // 1 → "Lunes"
  // 2 → "Martes"
  // 3 → "Miércoles"
  // otro → "Día inválido"

  function diaSemana(num) {
    switch (num) {
      case 1:
        console.log("Lunes");
        break;

      case 2:
        console.log("Martes");
        break;

      case 3:
        console.log("Miercoles");
        break;

      case 4:
        console.log("Jueves");
        break;

      case 5:
        console.log("Viernes");
        break;

      case 6:
        console.log("Sábado");
        break;

      case 7:
        console.log("Domingo");
        break;

      default:
        console.log("Día inválido");
    }
  }

  diaSemana(1);
  diaSemana(5);
}
