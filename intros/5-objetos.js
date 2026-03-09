/** @format */
// Objetos
// Trabajando con Objetos

// Crear objeto
let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  arrancar: function () {
    console.log("El coche está arrancando...");
  },
};
// Acceder a propiedades
console.log(coche.marca); // "Toyota"
console.log(coche["modelo"]); // "Corolla"
// Modificar propiedades
coche.año = 2021;
coche.color = "Rojo"; // Agregar nueva propiedad
// Llamar métodos
coche.arrancar();
// Destructuring
let { marca, modelo } = coche;
console.log(marca); // "Toyota"
