/** @format */

//
{
  // Crea una función temperatura(grados):

  // Si > 30 → "Hace mucho calor"
  // Si entre 20 y 30 → "Buen tiempo"
  // Si < 20 → "Hace frío"

  function temperatura(grados) {
    if (grados > 30) {
      console.log("Hace mucho calor");
    } else if (grados <= 30 && grados >= 20) {
      console.log("Buen tiempo");
    } else {
      console.log("Hace frío");
    }
  }

  temperatura(35);
}

