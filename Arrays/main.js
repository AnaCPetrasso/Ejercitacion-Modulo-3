// ____________________________________________________obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos
const numbers = [5, 7, 2, 8, 20, 16, 4, 3]
//quiero hacer una función que "recorra" el array y me devuelva el numero mas chico
const obtenerMenor = numbers => {
    return Math.min(...numbers)
}
// The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.
// … in front of an array will convert array to distinct variables and send them to the function, which is equivalent to
// Math.min(1, 2, 3)
// Math.max(1, 2, 3)
//https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
console.log(obtenerMenor(numbers))
// ____________________________________________________sumar(numeros)
//Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos.
//sumarNumeros([5, 7, 10, 12, 24]) // 58
let sum = 0
const sumarNumeros = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum
}
console.log(sumarNumeros(numbers));
// ____________________________________________________contiene(numero, numeros)
//Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true 
//o false dependiendo de si dicho numero se encuentra en el array de numeros
//https://es.javascript.info/
const contiene = (number, numbers) => {
    return numbers.includes(number, 0)
}
console.log(contiene(9, numbers))
console.log(contiene(8, numbers))
// ____________________________________________________invertirCaso(string)
//Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso
// invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

const invertirCaso = (string)=>{

    for (let i = 0; i < string.length; i++){
        if (i == /[A-Z]/g){
          
        }
    }
}
console.log(invertirCaso('hoLa'))