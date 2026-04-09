/** @format */

{
  // Ejercicio 3 (pro)
  // Función accesoUsuario(edad, tieneEntrada):
  // Si edad < 18 → "No puedes entrar"
  // Si edad ≥ 18 PERO no tiene entrada → "Compra entrada"
  // Si edad ≥ 18 Y tiene entrada → "Bienvenido"
  // 👉 Aquí usas:
  // && (y)
  // condiciones combinadas

  function acceso(edad, entrada) {
    if (edad < 18) {
      console.log("no puede entrar eres menor de edad");
    } else if (edad >= 18 && entrada === false) {
      console.log("Eres mayor de edadad pero no tienes entrada, compra una");
    } else {
      console.log("SI puedes entrar, bienvenido");
    }
  }

  acceso(20, true);
}
