// -nivel avanzado - 1;
 //Crea un generador de pirámides de asteriscos. El programa debe pedir al usuario la altura de la pirámide y mostrarla en la consola.
{
    //Generador de pirámides de asteriscos
    function piramidGenrator(top) {
        for (let i = 1; i <= top; i++) {
            // ' '.repeat(top - i) → genera los espacios a la izquierda.
            const espacios = " ".repeat(top - i);

            // '*'.repeat(i*2 - 1) → genera los asteriscos de cada nivel.
            const asteriscos = "*".repeat(i * 2 - 1);
            console.log(espacios + asteriscos + espacios);
        }
    }
    // let top = parseInt(prompt("Itroduce la top de la primide"));
    console.log(piramidGenrator(10));
}


//2️⃣ Generador de contraseña aleatoria
{
    
function generarPassword(longitud = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < longitud; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

console.log(generarPassword(12));

// Incluye mayúsculas, minúsculas y números.

// chars[Math.floor(Math.random()*chars.length)] → elige un carácter aleatorio.


}


// {

// 3️⃣ Filtrar nombres por longitud
// function filtrarNombres(nombres, maxLongitud) {
//   return nombres.filter(nombre => nombre.length < maxLongitud);
// }

// console.log(filtrarNombres(["Ana", "Roberto", "Luis", "María"], 5)); // ["Ana", "Luis"]

// Usa Array.filter con una función flecha para simplificar.

// 4️⃣ Contar palabras en una frase
// function contarPalabras(frase) {
//   if (!frase.trim()) return 0;
//   return frase.trim().split(/\s+/).length;
// }

// console.log(contarPalabras("Hola mundo, esto es JavaScript")); // 5

// trim() → elimina espacios al inicio y final.

// split(/\s+/) → divide por uno o más espacios, incluyendo tabulaciones.

// 5️⃣ Ordenar un array de nombres alfabéticamente
// function ordenarNombres(nombres) {
//   return nombres.slice().sort((a, b) => a.localeCompare(b));
// }

// console.log(ordenarNombres(["Ana", "Roberto", "Luis", "María"]));
// // ["Ana", "Luis", "María", "Roberto"]

// slice() → crea una copia para no modificar el array original.

// localeCompare → compara cadenas correctamente incluyendo acentos.

// 6️⃣ Generador de números pares e impares hasta un número
// function paresEImpares(n) {
//   const pares = [];
//   const impares = [];
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) pares.push(i);
//     else impares.push(i);
//   }
//   return { pares, impares };
// }

// console.log(paresEImpares(10));
// // { pares: [0,2,4,6,8,10], impares: [1,3,5,7,9] }

// Devuelve un objeto con dos arrays separados.

// 7️⃣ Convertir de kebab-case a lowerCamelCase con validaciones
// function kebabALowerCamelCase(texto) {
//   if (!texto) return "You must provide some text";
//   if (/[A-Z]/.test(texto)) return "The text contains capital letters";
//   if (/_/.test(texto)) return "The text contains underscores";

//   return texto
//     .split('-')
//     .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }

// console.log(kebabALowerCamelCase("hola-mundo-prueba")); // "holaMundoPrueba"
// console.log(kebabALowerCamelCase("Hola-Mundo")); // "The text contains capital letters"
// console.log(kebabALowerCamelCase("hola_mundo")); // "The text contains underscores"
// console.log(kebabALowerCamelCase("")); // "You must provide some text"

// }
