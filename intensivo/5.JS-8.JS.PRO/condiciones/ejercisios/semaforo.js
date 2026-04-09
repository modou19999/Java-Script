/** @format */

{
  // 🟡 Ejercicio 5 (medio)
  // Función colorSemaforo(color):
  // "rojo" → "Parar"
  // "amarillo" → "Precaución"
  // "verde" → "Avanzar"
  // otro → "Color no válido"

  function colorSemaforo(color) {
    switch (color) {
      case "rojo":
        console.log("Parar");
        break;

      case "amarillo":
        console.log("Precaución");
        break;

      case "verde":
        console.log("Avanzar");
        break;

      default:
        console.log("Color no valido");
    }
  }

  colorSemaforo("rojo");
  colorSemaforo("amarillo");
  colorSemaforo("verde");
  colorSemaforo("azul");
}
