/** @format */

{
  // Objeto

  // un dato no primitivo (referenciado)
  // que incluye propiedades asociadas a otros datos

  const user = {
    name: "Pepe",
    age: 22,
  };

  user.job = "Developer";
  console.log(user);
}

{
  // Funciones

  // conjuntos de instrucciones
  // que ejecuto cunado quiero
  // normalmente invocandolas por su nombre

  function make() {
    const x = 22;
    console.log(x);
  }

  // ADEMAS: una funcion es un objeto
  make.age = function () {
    console.log("Estoy un poco desconcertado");
  };

  console.log(make);
  make();
  make.age();
}

{
  // arrow
  const num = () => {
    const modelo = 222544;
    console.log("Modelo", modelo);
  };

  num();
}

{
  //asignacion de una expresion funcional

  const equipo = function () {
    const x = 23;
    console.log("Jugadores", x);
  };

  equipo();
}

{
  // declaracion d una funcion

  function contactos() {
    const x = 36;
    console.log("AMIGOS", x);
  }

  contactos();
}
