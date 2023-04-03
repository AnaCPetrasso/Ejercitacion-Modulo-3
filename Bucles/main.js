//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Estructuras de control: bucles
//------------------------------------------------------------ obtenerIndice(valor, array)
//Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer 
//ítem con dicho valor en el array, o -1 si no hay ninguno.
const numbers =  [5, 7, 12, 34, 54, 2, 12]
 const obtenerIndice = (valor, numbers) =>{
    return numbers.indexOf(valor)
 }
console.log(obtenerIndice(12,numbers))
console.log(obtenerIndice(83,numbers))
//------------------------------------------------------------ repetir(valor, cantidad)
//Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.
const repetir = (valor,cantidad)=>{
    let array =[] //creo un array vacio para ir sumandole elementos
    for (let i=0; i < cantidad ; i++){
        array.push(valor)
    }
    return array
}
console.log(repetir('lovelace',3))
console.log(repetir('a', 5))
console.log(repetir('html', 0))
//------------------------------------------------------------ sumarImparesHasta(numero)
//Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.
