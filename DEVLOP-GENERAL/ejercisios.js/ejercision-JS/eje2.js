Nivel - Medio;
{
    /*   
1. 
Eliminar primer y último carácter
function recortar(str) {
    console.log(str.slice(1, -1));
}
recortar('Hola');
2. Palíndromo
function esPalindromo(str) {
    const s = str.toLowerCase();
    console.log(s === s.split('').reverse().join(''));
}
esPalindromo('radar'); // true
3. Contar vocales
function contarVocales(str) {
    const matches = str.match(/[aeiouAEIOU]/g);
    console.log(matches ? matches.length : 0);
}
contarVocales('Hola Mundo'); // 4
4. Pangrama
function esPangrama(str) {
    str = str.toLowerCase();
    const abecedario = 'abcdefghijklmnopqrstuvwxyz';
    console.log([...abecedario].every(l => str.includes(l)));
}
esPangrama('El veloz murciélago hindú comía feliz cardillo y kiwi');
5. Contiene todas las vocales
function todasVocales(str) {
    console.log(['a','e','i','o','u'].every(v => str.toLowerCase().includes(v)));
}
6. Cuenta atrás
function cuentaAtras(n) {
    for (let i = n; i >= 0; i--) console.log(i);
}
7. Calcular edad
function calcularEdad(añoNacimiento) {
    const edad = new Date().getFullYear() - añoNacimiento;
    console.log(edad);
}
8. Mayor de edad
function esMayorEdad(edad) {
    console.log(edad >= 18 ? "Mayor de edad" : "Menor de edad");
}
9. Lanzar dado
function lanzarDado() {
    console.log(Math.floor(Math.random() * 6) + 1);
}
10. Año bisiesto
function bisiesto(año) {
    console.log((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0 ? "Bisiesto" : "No bisiesto");
}
11. Piedra, papel, tijera
function juego(opcion) {
    const opciones = ['piedra','papel','tijera'];
    const maquina = opciones[Math.floor(Math.random()*3)];
    console.log(`Jugador: ${opcion} | Máquina: ${maquina}`);
    if (opcion === maquina) console.log("Empate");
    else if ((opcion==='piedra' && maquina==='tijera')||(opcion==='papel' && maquina==='piedra')||(opcion==='tijera' && maquina==='papel')) console.log("¡Ganaste!");
    else console.log("Perdiste");
}
12. Fibonacci hasta N
function fibonacci(n) {
    let a = 0, b = 1;
    while (a <= n) {
        console.log(a);
        [a,b] = [b,a+b];
    }
}
13. Nombre de usuario aleatorio
function generarUsuario(nombres, apellidos) {
    const nombre = nombres[Math.floor(Math.random()*nombres.length)];
    const apellido = apellidos[Math.floor(Math.random()*apellidos.length)];
    const numero = Math.floor(Math.random()*100)+1;
    console.log(`${nombre} ${apellido} ${numero}`);
}
14. Calculadora de propinas
function calcularPropina(cuenta, porcentaje) {
    const propina = (cuenta*porcentaje/100).toFixed(2);
    const total = (cuenta + parseFloat(propina)).toFixed(2);
    console.log(`Cuenta: ${cuenta}, Propina: ${propina}, Total: ${total}`);
}
15. Calcular descuento
function descuento(precio, porcentaje) {
    const descuento = (precio*porcentaje/100).toFixed(2);
    const total = (precio - descuento).toFixed(2);
    console.log(`Precio: ${precio}, Descuento: ${descuento}, Total: ${total}`);
}*/
}
