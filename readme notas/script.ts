. Qué añade TypeScript

TypeScript básicamente es JavaScript + tipos.

Ejemplo:

let age: number = 25
let name: string = "Juan"
Tipos de objetos
type User = {
  name: string
  age: number
}

const user: User = {
  name: "Ana",
  age: 30
}
Interfaces
interface User {
  name: string
  age: number
}
Uniones de tipos
let id: string | number
Clases
class User {
  name: string

  constructor(name: string){
    this.name = name
  }
}