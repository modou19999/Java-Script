/** @format */

{
  // Ejercicio 2 (medio)

  // Función numero(num):

  // Si es positivo → "Positivo"
  // Si es negativo → "Negativo"
  // Si es 0 → "Es cero"

  function numero(num) {
    if (num > 0) {
      console.log("Positivo");
    } else if (num < 0) {
      console.log("Negativo");
    } else {
      console.log("Es cero");
    }
  }

  numero(0);
}
