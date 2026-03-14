


1. Qué deberías tener claro de JavaScript antes de TypeScript

Antes de entrar fuerte en TypeScript, necesitas dominar estas bases de JavaScript.

Variables y tipos
let age = 25
const name = "Juan"

Tipos primitivos importantes:

string

number

boolean

null

undefined

Objetos
const user = {
  name: "Ana",
  age: 30
}

console.log(user.name)

Conceptos importantes:

mutabilidad

acceso a propiedades

clonación ({...obj})

Arrays y métodos
const numbers = [1,2,3]

numbers.push(4)

const doubled = numbers.map(n => n * 2)

Métodos que debes conocer:

Mutables

push

pop

sort

Inmutables

map

filter

find

toSorted

Funciones
function sum(a,b){
  return a+b
}

Arrow function:

const sum = (a,b) => a + b

Conceptos clave:

parámetros

return

callbacks

HOF (higher order functions)

DOM (muy importante para web)
const button = document.querySelector("button")

button.addEventListener("click", () => {
  alert("Hola")
})

Conceptos:

querySelector

eventos

modificar HTML

Asincronía

Fundamental en JS.

Promesas:

fetch("https://api.example.com")
  .then(res => res.json())
  .then(data => console.log(data))

Async/await:

async function getData(){
  const res = await fetch(url)
  const data = await res.json()
}