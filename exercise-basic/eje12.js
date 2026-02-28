// Crea una función que reciba un parámetro de tipo string e imprima por consola 
// el string revertido. (ejemplo: 'casa' => 'asac).

function revers(text) {
    let result = "";
    for (let i = text.length - 1; i > -1;  i--) {
        result = result + text [i]
        
    }
    console.log(result)
}
revers("casa")
