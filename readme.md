# Dudas

# Math
- Para generar un número al azar en JavaScript se usa Math.random().

Math.random()      → devuelve un número decimal entre 0 y 10.
Math.random()      → devuelve un número decimal entre 0 y 1.
Math.random() * 11 → escala el número a 0 hasta casi 11.
Math.floor()       → redondea hacia abajo para obtener un número entero entre 0 y 10.
console.log()      → imprime el resultado.

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
