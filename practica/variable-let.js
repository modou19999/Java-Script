//name es una variable que almacena una cadena de texto
let nombre = "Julia";// Asignación de valor
nombre = "Lucia"; // Reasignación de valor
console.log(nombre); // Muestra "Lucia" (no "Julia" porque se ha reasignado el valor)

// age es una variable que almacena un número
let age = 25; // Asignación de valor
console.log(age);

// phone es una variable que almacena un número de teléfono
let phoneNumber = +3467890123;
console.log(phoneNumber);

//address es una variable que almacena una dirección
let address = "Calle Mayor, 123";
console.log(address);

// identification es una variable que almacena un valor nulo
let identification = null;
console.log(identification); // Muestra null

// isStudent es una variable que almacena un valor "booleano"
let isStudent = true;
console.log(isStudent); // Muestra true

// isEmployed es una variable que almacena un valor "booleano"
let isEmployed = false;
console.log(isEmployed); // Muestra false

// city es una variable que almacena el nombre de una ciudad
let city = "Barcelona";
console.log(city); // Muestra Barcelona


//undefined es un valor que indica que una variable no ha sido asignada
let country; // si no se asigna un valor a la variable, su valor será undefined
console.log(country); // Muestra undefined


let student = {
    nombre: "Julia",
    age: 25,
    Worker: false,
    identification: null,
    city: "Barcelona",
    phoneNumber: 623456258
}
console.log(student); // Imprime el objeto completo

let firstName = "Julia";
mensaje = `Hola soy ${firstName} y bienvenido a la práctica de variables let`; // Uso de template literals para incluir la variable firstName en el mensaje
console.log(mensaje);

let Student = "Julia";
mensaje = "Hola soy ${Student} y bienvenido a la práctica de variables let"; // Uso de comillas dobles en lugar de backticks, no se interpretará la variable student
console.log(mensaje); // Imprime "Hola soy ${student} y bienvenido a la práctica de variables let" sin interpretar la variable student


