-1; //Imprime por consola el string 'Hello World'.
{
    console.log("Hello world");
}

-2; //Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
{
    const name = "Lucia";
    let age = 21;

    console.log(`Me llamo ` + name + ` y tengo ` + age + ` años`);
}

-3; //Cambia ahora el valor de una de las dos variables e imprime por consola.
{
    const name = "Lucia";
    let age = 21;
    age = 22;
    // template string
    console.log(`Me llamo ${name} y tengo ${age} años`);
}

-4; //Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
{
    let num1 = 8;
    let num2 = 2;
    let sum = num1 + num2;

    console.log(`Resultado normal ` + sum);
    console.log(`Resultado usando templete string ${sum}`);
}

-5; //Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
{
    const empresa = "fitnes";
    const alias = "generation";

    console.log(empresa + " " + alias);
    console.log(`template string ${empresa} ${alias}`);
}

-6; //Crea una función que imprima por consola el string 'Hello World', recibido como argumento.
{
    function saludar(text) {
        console.log("saludar", text);
    }
    saludar(`Hello World`);
}

-7; //Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
{
    function multiple(a, b) {
        console.log("El resultado de multiplicar es", a * b);
    }

    multiple(8, 2);
}

-8; //  Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
{
    function parametro(elevar) {
        console.log("el resultado de elevar es", elevar ** 2);
    }
    parametro(5);
}

-9; // Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)
{
    function area(b, a) {
        // return a * b
        console.log(a * b);
    }

    area(5, 4);
}

-10; //Crea una función que imprima por consola un número al azar entre 0 y 10.
{
    function randomNum() {
        console.log(Math.floor(Math.random() * 11));
    }
    randomNum();
}

-11; //Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
{
    function parImpar(num) {
        if (num % 2 === 0) {
            console.log(`El numero es par`);
        } else {
            console.log(`El numero es impar`);
        }
    }
    parImpar(21);
}

-12; //Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).
{
    function invertido(text) {
        let result = "";

        for (let i = text.length - 1; i >= 0; i--) {
            result += text[i];
        }
        return result;
    }

    console.log(invertido("casa"));
}

-13; //Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
{
    function multiple(num) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }
    multiple(2);
}

-14; // Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.
{
    function esPrimo(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }

        console.log(num + " es primo");
    }
    // por que no me da otros numero ver como declarar
    esPrimo(3);
}

-15; // Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la ç´jrespuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.

{
    // 15. Adivina el número
    function adivina() {
        const num = Math.floor(Math.random() * 10) + 1;
        const respuesta = parseInt(prompt("Adivina un número del 1 al 10"));
        if (respuesta === num) console.log("¡Acertaste!");
        else console.log(`Fallaste. El número correcto era ${num}`);
    }
    adivina();
}

{
    // Nivel Básico
    // 1. Imprimir 'Hello World'
    // console.log('Hello World');
    // 2. Declarar variables de dos formas e imprimir
    // let var1 = 5;
    // const var2 = 10;
    // console.log(var1, var2);
    // 3. Cambiar valor de una variable
    // var1 = 20;
    // console.log(var1);
    // 4. Sumar dos números
    // let num1 = 5, num2 = 10;
    // console.log(num1 + num2);
    // 5. Concatenar strings
    // let str1 = 'Hola', str2 = 'Mundo';
    // console.log(str1 + ' ' + str2);
    // 6. Función imprimir 'Hello World' recibido como argumento
    // function saludar(texto) {
    //     console.log(texto);
    // }
    // saludar("Hello World");
    // 7. Función multiplicación de dos números
    // function multiplicar(a, b) {
    //     console.log(a * b);
    // }
    // multiplicar(8, 2);
    // 8. Función elevar al cubo
    // function cubo(n) {
    //     console.log(n ** 3);
    // }
    // cubo(3);
    // 9. Área de un rectángulo
    // function areaRectangulo(base, altura) {
    //     console.log(base * altura);
    // }
    // areaRectangulo(5, 4);
    // 10. Número al azar 0–10
    // function numeroAleatorio() {
    //     console.log(Math.floor(Math.random() * 11));
    // }
    // numeroAleatorio();
    // 11. Número par o impar
    // function parImpar(n) {
    //     console.log(n % 2 === 0 ? "Par" : "Impar");
    // }
    // parImpar(7);
    // 12. Invertir un string
    // function invertir(str) {
    //     console.log(str.split('').reverse().join(''));
    // }
    // invertir('casa'); // asac
    // 13. Tabla de multiplicar
    // function tablaMultiplicar(n) {
    //     for (let i = 1; i <= 10; i++) {
    //         console.log(`${n} x ${i} = ${n * i}`);
    //     }
    // }
    // tablaMultiplicar(5);
    // 14. Número primo
    // function esPrimo(n) {
    //     if (n < 2) return false;
    //     for (let i = 2; i <= Math.sqrt(n); i++) {
    //         if (n % i === 0) return false;
    //     }
    //     console.log(n + " es primo");
    // }
    // esPrimo(7);
    // 15. Adivina el número
    // function adivina() {
    //     const numero = Math.floor(Math.random() * 10) + 1;
    //     const respuesta = parseInt(prompt("Adivina un número del 1 al 10"));
    //     if (respuesta === numero) console.log("¡Acertaste!");
    //     else console.log(`Fallaste. El número correcto era ${numero}`);
    // }
    // adivina();
}
