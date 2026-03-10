<!-- @format -->

java script basico medio y una explicacion

Asociación entre clases
Definir la estructura de un objeto que almacena una factura (Invoice)

Las facturas están formadas por

la información de la propia empresa (nombre de la empresa, dirección, teléfono, NIF),
la información del cliente (similar a la de la empresa),
una lista de elementos (cada uno de los cuales dispone de descripción, precio, cantidad),
y otra información básica de la factura (importe total, tipo de IVA, forma de pago).
Todas las propiedades se redefinen como privadas.

Una vez definidas las propiedades del objeto

Se incluyen 2 métodos públicos

1. calcula el importe total de la factura y actualice el valor de la propiedad correspondiente.
2. muestre por pantalla el importe total de la factura en un formato adecuado.
3. muestre por pantalla toda la factura en un formato adecuado.
   Opción: el primero de los métodos debería redefinirse como privado.

# 10/03/2026

- ver y leer
- hacer y repetir
  java script los tipos de functiones los tipos de declaraciones if else for forEach forOff

Perfecto, vamos a organizarlo de manera clara y estilo “Claude”, explicando tipos de funciones y estructuras de control en JavaScript y TypeScript, con ejemplos. 🧠💻

1️⃣ Tipos de funciones en JavaScript / TypeScript
a) Función declarativa (Function Declaration)
function sumar(a: number, b: number): number {
return a + b;
}

Se declara con la palabra clave function.

Hoisting: puedes llamarla antes de declararla.

Útil cuando necesitas funciones disponibles en todo el scope.

b) Función expresada (Function Expression)
const multiplicar = function(a: number, b: number): number {
return a \* b;
};

Se asigna a una variable.

No tiene hoisting; solo disponible después de declararla.

c) Arrow Function (función flecha)
const dividir = (a: number, b: number): number => a / b;

Sintaxis más corta.

No tiene su propio this, hereda del contexto donde se declara.

Muy útil en callbacks y programación funcional.

d) Funciones anónimas
setTimeout(function() {
console.log("Hola mundo");
}, 1000);

No tienen nombre.

Generalmente se usan como callbacks o parámetros de otra función.

2️⃣ Tipos de declaraciones y estructuras de control
a) if / else
const edad = 18;

if (edad >= 18) {
console.log("Mayor de edad");
} else {
console.log("Menor de edad");
}

Evalúa una condición booleana.

También existe else if para múltiples condiciones.

b) for clásico
for (let i = 0; i < 5; i++) {
console.log(i);
}

Iteración basada en índice.

Control total sobre inicio, fin y pasos.

c) for...of
const frutas = ["manzana", "pera", "plátano"];
for (const fruta of frutas) {
console.log(fruta);
}

Itera sobre los valores de un array.

Más limpio y legible que for clásico.

d) forEach
frutas.forEach((fruta, index) => {
console.log(`${index}: ${fruta}`);
});

Método de array.

Permite pasar un callback que recibe valor y índice.

No se puede usar break o continue.

- ⌈ fin ⌉

como puedo mezclar todo estos para aprender junto con el dom

¡Perfecto! Para aprender JavaScript, TypeScript, estructuras de control, funciones y DOM juntos, lo ideal es hacer ejercicios prácticos que combinen todo. Te propongo un plan estructurado paso a paso y un ejemplo completo para practicar. 🧩

1️⃣ Idea general

Combinar:

Funciones → para separar la lógica en bloques reutilizables.

If/else → para decisiones según los datos.

For / for…of / forEach → para recorrer arrays de datos.

DOM → para mostrar resultados en la página.

Eventos → para que el usuario interactúe (clics, formularios).

2️⃣ Ejemplo práctico: Lista de tareas (To-Do List)
HTML

<div>
  <input id="tareaInput" placeholder="Escribe una tarea" />
  <button id="btnAgregar">Agregar</button>
</div>
<ul id="listaTareas"></ul>
JavaScript / TypeScript
type Tarea = {
  id: number;
  nombre: string;
  completada: boolean;
};

// Array para almacenar tareas
const tareas: Tarea[] = [];

// Referencias al DOM
const input = document.getElementById("tareaInput") as HTMLInputElement;
const btnAgregar = document.getElementById("btnAgregar") as HTMLButtonElement;
const lista = document.getElementById("listaTareas") as HTMLUListElement;

// Función para agregar tarea
const agregarTarea = (): void => {
const nombre = input.value.trim();
if (nombre === "") {
alert("Escribe una tarea");
return;
}

const tarea: Tarea = {
id: tareas.length + 1,
nombre,
completada: false
};

tareas.push(tarea);
input.value = "";
mostrarTareas();
};

// Función para mostrar tareas
const mostrarTareas = (): void => {
lista.innerHTML = "";
tareas.forEach(tarea => {
const li = document.createElement("li");
li.textContent = tarea.nombre;

    // Color según completada
    li.style.textDecoration = tarea.completada ? "line-through" : "none";

    // Click para marcar como completada
    li.addEventListener("click", () => {
      tarea.completada = !tarea.completada;
      mostrarTareas();
    });

    lista.appendChild(li);

});
};

// Evento
btnAgregar.addEventListener("click", agregarTarea);
3️⃣ Qué estructuras estás usando aquí
Concepto Dónde aparece Cómo ayuda
Función (agregarTarea, mostrarTareas) Separación de lógica Reutilizable, más claro
If/else if (nombre === "") Valida datos del usuario
ForEach tareas.forEach(...) Recorre todas las tareas para mostrarlas
DOM document.getElementById, createElement, appendChild Para interactuar con la página
Evento btnAgregar.addEventListener(...) Para capturar clic del usuario
Arrow Function () => {...} Sintaxis concisa para callbacks
4️⃣ Cómo practicar paso a paso

Crear un array simple y recorrerlo con for, for...of y forEach.

Crear funciones que agreguen, eliminen o transformen elementos.

Mostrar los resultados en la consola primero.

Luego, manipular el DOM para que los datos aparezcan en la página.

Añadir eventos como botones o inputs.

Probar con condicionales (if/else) para validar entradas o cambiar estilos.

💡 Tip: Puedes mezclar tuplas y union types en tus tareas, por ejemplo:

type TareaUnion = [string, boolean]; // [nombre, completada]
const tareasUnion: TareaUnion[] = [["Estudiar JS", false]];

Luego iteras y actualizas igual que con objetos.

Si quieres, puedo prepararte un mini-proyecto completo de 1 página que combine:

Funciones

Arrays y tuplas

Condicionales

Bucles (for, forEach, for...of)

Eventos

DOM

Listo para copiar, probar y estudiar.
