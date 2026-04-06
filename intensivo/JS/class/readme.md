###

Día 1 – 3h prácticas
🟢 1️⃣ Teoría activa (45 min)

Palabras clave para repasar mientras escribes código:

JS / Clases

class, constructor, this, new, method
Backend / Express
express(), app.get(), app.post(), req, res.json()
DB / SQL
SELECT, INSERT, PRIMARY KEY, WHERE

Mini tip: No leas, escribe ejemplos al mismo tiempo. Por ejemplo:

class User {
constructor(id, name) {
this.id = id;
this.name = name;
}

greet() {
return `Hola, soy ${this.name}`;
}
}

const user1 = new User(1, "Juan");
console.log(user1.greet());
🟡 2️⃣ Práctica guiada (1h 30 min)
🔹 Bloque 1 – JS Clases (30 min)

Palabras clave: class, constructor, this, new, method

Ejercicio:

Crear clase User
Propiedades: id, name
Método: greet() que diga “Hola, soy {name}”
🔹 Bloque 2 – Backend Express (30 min)

Palabras clave: express(), app.get(), app.post(), req, res.json()

Ejercicio:

Crear un servidor con Express
Ruta: GET /users → devuelve array de usuarios
Ruta: POST /users → añade un usuario al array
const express = require("express");
const app = express();
app.use(express.json());

let users = [];

app.get("/users", (req, res) => res.json(users));

app.post("/users", (req, res) => {
users.push(req.body);
res.json({ message: "Usuario añadido" });
});

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
🔹 Bloque 3 – CRUD básico (30 min)

Palabras clave: GET, POST, PUT, DELETE

Ejercicio:

Agregar rutas:
PUT /users/:id → actualizar nombre
DELETE /users/:id → eliminar usuario
🔴 3️⃣ Mini proyecto (45 min)

Objetivo: API de usuarios realista pero simple

Requisitos:

Clase User
Array como base de datos
Servidor Express
Rutas:
GET /users → lista usuarios
POST /users → añadir usuario

Opcional: práctica mental SQL:

CREATE TABLE users (
id INT PRIMARY KEY,
name VARCHAR(100)
);

INSERT INTO users VALUES (1, 'Juan');

SELECT \* FROM users;
🧠 Palabras clave del día (para memorizar rápido)

JS: class, this, constructor
Backend: express, req, res
API: GET, POST
DB: SELECT, INSERT, PRIMARY KEY

💡 Tip maestro:
Cada día repite 1 concepto + 1 ejercicio + 1 mini proyecto. Así, 3h diarias = progreso sólido sin quemarte.

Si quieres, mañana puedo armar el Día 2 con:

PUT, DELETE
async/await
Conexión a base de datos real (SQLite o MongoDB simple)

Eso te deja un camino claro de 2 semanas para ser capaz de crear APIs completas.

Si quieres, puedo armarte el roadmap completo de 2 semanas, día por día, con prácticas de 3h enfocadas y palabras clave diarias.
