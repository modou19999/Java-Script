<!-- @format -->

# Aprende:

Variables (let, const)
Tipos de datos
Condicionales (if, else)
Bucles (for, while)
Funciones
Arrays
Objetos

- No toques frameworks todavía. Nada de React, Node, etc.
  Fase 2:
  Manipular el DOM (cuando ya entiendas lo básico)
  document.querySelector
  Eventos (click, submit)
  Cambiar texto o estilos con JS

- Haz mini proyectos:
  Contador de clicks
  Lista de tareas simple
  Generador de colores random
  Videos de MDN Web Docs (documentación oficial, muy buena)

- Fase 3: Proyectos pequeños

Aquí es donde realmente dejas de sentirte atascado.
Calculadora
Adivinar número
Cronómetro
Mini carrito de compras

- 🛠 4. Método anti-atasco
  Cuando no entiendas algo:
  Escríbelo tú mismo.
  Rompe el problema en partes.
  Usa console.log() en todo.
  Intenta explicarlo en voz alta como si enseñaras.
  Si no puedes explicarlo, no lo entiendes todavía. Y está bien.

# Nivel Básico

Imprime por consola el string 'Hello World'.

Declara una variable de las dos formas posibles, e imprime por consola los dos valores.

Cambia ahora el valor de una de las dos variables e imprime por consola.

Crea dos variable numéricas e imprime el resultado de sumarlas por consola.

Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.

Crea una función que imprima por consola el string 'Hello World', recibido como argumento.

Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.

Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.

Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)

Crea una función que imprima por consola un número al azar entre 0 y 10.

Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.

Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).

Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.

Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.

Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.

# Dudas

# Math

- Para generar un número al azar en JavaScript se usa Math.random().

Math.random() → devuelve un número decimal entre 0 y 10.
Math.random() → devuelve un número decimal entre 0 y 1.
Math.random() \* 11 → escala el número a 0 hasta casi 11.
Math.floor() → redondea hacia abajo para obtener un número entero entre 0 y 10.
console.log() → imprime el resultado.

- Si quisieras entenderlo a nivel más profundo:
  Math.random() → número decimal entre 0 (incluido) y 1 (excluido)

* 11 → escala el rango a 0–10.999...
  Math.floor() → elimina los decimales → 0–10

# sacar par o impar

% → operador módulo (resto de la división)
numero % 2 → divide entre 2
Si el resto es 0 → es par
Si el resto no es 0 → es impar
=== → comparación estricta (buena práctica)
