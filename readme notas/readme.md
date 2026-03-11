#

🔹 Plan rápido para ponerte al día en 1 semana

Día 1: Variables, tipos y coerción de tipos (2 + "2").

Día 2: Objetos y arrays (mutables vs inmutables).

Día 3: Funciones y callbacks.

Día 4: map, filter, find, forEach.

Día 5: DOM básico (querySelector, eventos).

Día 6: TypeScript básico: tipos, interfaces, arrays tipados.

Día 7: Ejercicios combinando todo: objetos + arrays + funciones + TS.

######

- @media sirve para cambiar estilos según el tamaño o características de la pantalla, lo que permite hacer webs responsive.

Otras condiciones comunes
@media (min-width:1024px) /_ pantallas grandes _/
@media (orientation:landscape) /_ horizontal _/
@media (max-height:600px) /_ altura _/

1.  for (bucle clásico)

Es el bucle tradicional donde controlas manualmente el contador.

for (let i = 0; i < 5; i++) {
console.log(i);
}

📌 Cómo funciona:

let i = 0 → empieza en 0

i < 5 → mientras sea menor que 5

i++ → aumenta en 1 cada vuelta

Salida:

0
1
2
3
4

✅ Ventajas

Control total del índice

Puedes usar break y continue

2. forEach

forEach es un método de los arrays que ejecuta una función para cada elemento.

const numeros = [10, 20, 30];

numeros.forEach((numero, index) => {
console.log(numero, index);
});

Salida:

10 0
20 1
30 2

📌 Características

Solo funciona con arrays

Recibe elemento, índice

No se puede usar break o continue

3. for...of

for...of recorre valores de estructuras iterables (arrays, strings, etc.).

const numeros = [10, 20, 30];

for (const numero of numeros) {
console.log(numero);
}

Salida:

10
20
30

📌 Características

Recorre los valores directamente

Funciona con arrays, strings, maps, sets

Permite break y continue

Diferencia clara
Bucle Qué recorre Índice Break
for lo que quieras ✅ ✅
forEach arrays ✅ ❌
for...of valores ❌ (directo) ✅
Ejemplo comparado
const frutas = ["🍎", "🍌", "🍇"];

// for
for (let i = 0; i < frutas.length; i++) {
console.log(frutas[i]);
}

// forEach
frutas.forEach(fruta => console.log(fruta));

// for of
for (const fruta of frutas) {
console.log(fruta);
}

💡 Regla rápida que usan muchos developers:

for → cuando necesitas control del índice

forEach → cuando solo recorres un array

for...of → cuando quieres código más limpio para iterables

#

- 3. Lo que estás viendo ahora (lo difícil)

Ahora estáis entrando en lo más complejo:

Narrowing

Type guards

Uniones e intersecciones

Interfaces

Tipado estructural

Clases en TS

Esto es ya nivel intermedio-alto.

4. Cómo ponerte al día rápido (plan realista)

Si dedicas 2-3 horas al día, en 1 semana te pones al día.

Día 1

Repasar JS:

variables

objetos

arrays

funciones

Día 2

Arrays + HOF

map

filter

find

Día 3

DOM + eventos

Día 4

Async / await + fetch

Día 5

TypeScript básico

tipos

interfaces

objetos

Día 6

Clases + OOP

Día 7

Ejercicios

5. Ejercicio clave (si puedes hacer esto ya vas bien)
   interface User {
   id: number
   name: string
   }

const users: User[] = [
{id:1,name:"Ana"},
{id:2,name:"Luis"}
]

function getUser(id:number): User | undefined {
return users.find(u => u.id === id)
}

#

- interface: Define la forma de un objeto (propiedades y tipos) y puede ser extendida por otras interfaces.

type: Crea un alias de tipo, que puede ser primitivo, objeto, unión o intersección.

| (unión): Permite que un valor sea de uno u otro tipo.

& (intersección): Combina tipos, creando un tipo que debe cumplir todas las condiciones a la vez.
