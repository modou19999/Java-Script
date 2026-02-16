# Function Declaration (Función declarada) →"es una forma de crear una función usando la palabra clave"
function → palabra reservada
amigo → nombre de la función
{ } → bloque de código


# Qué es una variable? → ""es un contenedor en la memoria donde puedes guardar valores (números, texto, objetos, etc.) para usarlos después.
let/const → forma de declarar la variable
edad → nombre de la variable
= → operador de asignación
26 → valor asignado

# Qué es un string?
Un string es básicamente texto.
Se declara con comillas simples '...', comillas dobles "..." o backticks `...`.

# Qué hace let
Crea una variable con un nombre que tú eliges.
Esa variable puede almacenar cualquier tipo de dato: número, texto, booleano, objeto, etc.
Permite reasignar un nuevo valor a la variable más adelante (es decir su valor puede cambiar)

# Qué es const?
const es una variable que NO cambia su valor después de asignarla.
Se usa para valores que deben ser constantes.
Debe asignarse un valor al declararla.
Tiene alcance de bloque, igual que let.

# Palabras claves de JavaScript que voy a usar todo el tiempo.
if/else → decidir qué hacer según condición
for → repetir código varias veces
function → agrupar código reutilizable
return → devuelve un resultado de la función

| Palabra                     | Qué hace                                           | Ejemplo                                              |
| --------------------------- | -------------------------------------------------- | -----------------------------------------------------|
| `let`                       | Declara una variable que puede cambiar             | `let edad = 26; edad = 27;`                          |
| `const`                     | Declara una variable que no cambia                 | `const PI = 3.14;`                                   |
| `var`                       | Variable antigua, global o función-scope           | `var x = 10;` (ya casi no se usa)                    |
| →`if`                       | Condición: ejecuta código si es verdadera          | `if(edad > 18){ console.log("Mayor"); }`             |
| →`else`                     | Complementa un `if` si la condición es falsa       | `if(edad>18){…} else {console.log("Menor");}`        |
| `for`                       | Bucle: repite código un número fijo de veces       | `for(let i=0;i<5;i++){ console.log(i); }`            |
| `while`                     | Bucle: repite mientras la condición sea verdadera  | `let i=0; while(i<5){ console.log(i); i++; }`        |
| `function`                  | Crea una función                                   | `function saludar(){ console.log("Hola"); }`         |
| `return`                    | Devuelve un valor de la función                    | `function suma(a,b){ return a+b; }`                  |
| `console.log()`             | Muestra algo en la consola                         | `console.log("Hola");`                               |
| `document.getElementById()` | Selecciona un elemento HTML por su id              | `let btn = document.getElementById("boton");`        |
| `addEventListener`          | Escucha un evento de un elemento                   | `btn.addEventListener("click", ()=>{alert("Hola")});`|
| `+`                         | Suma números o concatena strings                   | `2+3 = 5, "Hola"+" Modou" = "Hola Modou"`            |
| `===`                       | Comparación estricta (valor y tipo)                | `5==="5" // false`                                   |
| `!=`                        | Diferente                                          | `5 != 3 // true`                                     |
| `>=`                        | Mayor o igual                                      | `5 >= 5 // true`                                     |
| `<=`                        | Menor o igual                                      | `3 <= 5 // true`                                     |
| `&&`                        | AND lógico                                         | `true && false // false`                             |
| `                           |                                                    | `                                                    |
| `!`                         | NOT lógico                                         | `!true // false`                                     |
| `[]`                        | Array, lista de valores                            | `let numeros = [1,2,3];`                             |
| `{}`                        | Objeto, estructura con propiedades                 | `let persona = {nombre:"Modou", edad:26};`           |
| `.`                         | Acceder a propiedad de objeto                      | `persona.nombre // "Modou"`                          |
| `` `...${var}...` ``        | Template literals para insertar variables en texto | `` `Hola ${nombre}` ``                               |

# hasta aqui



# function email(){}	Function Declaration	Declaración tradicional de función, no es una variable. Se puede usar antes de declararla (hoisting).
# const email = function(){}	Function Expression	Función guardada en una variable constante. No se puede reasignar.
# let email = function(){}	Function Expression (variable con let)	Igual que con const, pero ahora la variable puede cambiar (reasignar otra función o valor).
# const email = () => {}	Arrow Function	Sintaxis moderna de función. Guardada en variable constante.
# let email = () => {}	Arrow Function con let	Igual que anterior, pero la variable puede cambiar. 

# →
# →
# →
¡Perfecto Modou! 🔥 Ya sabes declarar functions, ahora vamos a combinarlo con variables, strings y template strings para practicar paso a paso.

1️⃣ Variables en JS

En JavaScript podemos crear variables para guardar información.

Con let (cambia el valor)
let nombre = "Modou";
console.log(nombre); // Modou

nombre = "GYMAESTHE";
console.log(nombre); // GYMAESTHE

Con const (no cambia el valor)
const edad = 27;
console.log(edad); // 27

// edad = 28; // ❌ Error, no se puede cambiar

2️⃣ Asignación de valores

Puedes declarar primero y asignar después:

let ciudad;
ciudad = "Madrid";
console.log(ciudad); // Madrid


O declarar y asignar directamente:

let pais = "España";
console.log(pais); // España

3️⃣ Operaciones con strings y concatenación
let nombre = "Modou";
let apellido = "Fall";

let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto); // Modou Fall

4️⃣ Template strings (más moderno y fácil)
let nombre = "Modou";
let edad = 27;

console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
// Hola, me llamo Modou y tengo 27 años.


✅ Usa las comillas invertidas ` y ${variable} para insertar valores.

5️⃣ Combinar con tu función

Ya sabes hacer esto:

function age(){
    return "27 años";
}
console.log(age());


Ahora con variables y template strings:

let nombre = "Modou";

function edad() {
    let años = 27;
    return `${nombre} tiene ${años} años`;
}

console.log(edad()); // Modou tiene 27 años

💪 Mini práctica

Crea una variable marca con tu marca de ropa favorita.

Crea una variable prenda con tu prenda favorita.

Haz una función que devuelva:
"Mi prenda favorita de [marca] es [prenda]"
usando template strings.

Si quieres, puedo hacerte la solución lista para copiar y probar en 1 minuto.

¿Quieres que lo haga?
# →—————✓

# Perfecto Modou 🔥 ya que ya sabes declarar funciones, vamos a hacer una práctica sencilla con variables, strings, asignaciones y template strings. Todo conectado con tu función.



# 2️⃣ Operaciones con strings
let saludo = "Hola" + " " + nombre; // concatenación con +
console.log(saludo); // Hola Carlos

# 3️⃣ Template Strings (más moderno y fácil)
let mensaje = `Mi nombre es ${nombre} y tengo ${edad} años`;
console.log(mensaje);
// Mi nombre es Carlos y tengo 26 años

4️⃣ Usando todo dentro de una función
function presentacion() {
    let nombre = "Julia";
    const edad = 26;
    
    // concatenación
    let saludo1 = "Hola, me llamo " + nombre + " y tengo " + edad + " años";
    console.log(saludo1);
    
    // template string
    let saludo2 = `Hola, me llamo ${nombre} y tengo ${edad} años`;
    console.log(saludo2);
}

presentacion();


Resultado en consola:

Hola, me llamo Julia y tengo 26 años
Hola, me llamo Julia y tengo 26 años

5️⃣ Mini práctica para ti 🚀

Crea una función bio()

Declara 2 variables ciudad y profesion usando let

Declara 1 variable nombre usando const

Muestra por consola un mensaje usando template string, por ejemplo:
"Hola, soy Modou, vivo en Madrid y soy modelo"

Si quieres, puedo hacerte un mini plan de 7 ejercicios de JavaScript desde cero, que vayan de variables hasta funciones con parámetros y condicionales, para que lo practiques paso a paso.

¿Quieres que haga eso?
