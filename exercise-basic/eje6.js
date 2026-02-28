// Crea una función que imprima por consola el string 'Hello World', recibido como argumento.

function saludar() {
    return "hello World"
}

console.log(saludar())
// console.log(saludar) esto no se hace por que iprimiria [Function: saludar]


//esta es la correcta recibido como argumento.
function saludar1(mensaje){
    return mensaje
}

console.log(saludar1("Hello, how are you!"))
