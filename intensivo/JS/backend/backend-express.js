/** @format */

{
  //express()
  // Qué es: función principal de Express para crear la aplicación de servidor.
  const express = require("express"); // esto importa express
  const app = express(); // crear la app

  //app.get()
  // Qué es: define una ruta GET, que responde a solicitudes de lectura.
  app.get("/", (req, res) => {
    resizeTo.send("Hola, mundo!"); // responder texto simple
  });

  // app.post()
  // Qué es: define una ruta POST, que recibe datos (por ejemplo, para crear un recurso).
  app.use(express.json()); // para recibir JSON en req.body

  app.post("/usuario", (req, res) => {
    const nuevoUsuario = req.body; // recibir datos
    console.log(nuevoUsuario);
    res.json({ mensaje: "Usuario creado", usuario: nuevoUsuario });
  });
}

// {4️⃣ req
// Qué es: objeto que representa la solicitud del cliente.
// Propiedades importantes:
// req.params → parámetros de ruta (/usuarios/:id)
// req.query → parámetros de URL (/usuarios?edad=25)
// req.body → datos enviados por POST/PUT

// Ejemplo:

// app.get('/usuarios/:id', (req, res) => {
//   const idUsuario = req.params.id;
//   res.send(`Buscando usuario con ID ${idUsuario}`);
// });
// 5️⃣ res.json()
// Qué es: envía respuesta en formato JSON al cliente.
// Ejemplo:
// app.get('/usuarios', (req, res) => {
//   const usuarios = [{ nombre: 'Ana' }, { nombre: 'Luis' }];
//   res.json(usuarios); // devuelve JSON
// });
// 💡 Ejercicio práctico rápido (30–60 min)
// Crear proyecto Node.js + Express
// Crear servidor en puerto 3000
// Definir rutas:
// GET / → “Hola, mundo”
// GET /usuarios → devuelve array de usuarios en JSON
// GET /usuarios/:id → devuelve usuario según ID
// POST /usuarios → recibe JSON con { nombre, edad } y lo devuelve con mensaje

// Ejemplo de datos JSON para POST:

// {
//   "nombre": "Ana",
//   "edad": 25
// }

// Si quieres, puedo hacer un mini proyecto completo de Backend Express con CRUD y array como base de datos usando estas palabras clave, listo para copiar y practicar 3 horas diarias.

// ¿Quieres que haga eso?
// }
