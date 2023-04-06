// ____________________________________________________obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos
const numbers = [5, 7, 2, 8, 20, 16, 4, 3]
//quiero hacer una función que "recorra" el array y me devuelva el numero mas chico
const obtenerMenor = numbers => {
    return Math.min(...numbers) //esto todavia no lo vimos 
}
console.log(obtenerMenor(numbers))
//otra forma de hacerlo seria: 
const obtenerMenorII = numbers => {
    let searchNumber = numbers[0] // Puedo poner +Infinity tmb
    for (const number of numbers) {
        if (number < searchNumber) {
            searchNumber = number
        }
    }
    return searchNumber
}
console.log(obtenerMenorII(numbers))
// ____________________________________________________sumar(numeros)
//Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos.
//sumarNumeros([5, 7, 10, 12, 24]) // 58
let sum = 0
const sumarNumeros = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i++) {
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

const invertirCaso = (string) => {
    let newString = ''
    for (i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase()) {
            newString += string[i].toLowerCase()
        }
        else {
            newString += string[i].toUpperCase()
        }
    }
    return newString
}
console.log(invertirCaso('feliz cumple'))
console.log(invertirCaso('Ada Lovelace'))
console.log(invertirCaso('jAvAsCrIpT'))
// ____________________________________________________gano(tragamonedas)
//Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. 
//Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.
const tragamonedas = ['💫', '💫', '💫', '💫', '💫']
const gano = tragamonedas => {
    tragamonedas = tragamonedas.slice(0, 5) //aca considero solo los  5 primeros elementos
    for (i = 1; i < tragamonedas.length; i++) { //recorro  el aray desde el 1 para comparlo con  los demas
        if (tragamonedas[i] !== tragamonedas[0]) { //
            return false
        } else {
            return true
        }
    }
}
console.log(gano(tragamonedas))
// ____________________________________________________estanJuntos(personajes)
//Crear una función estanJuntos que tome como argumento un array de strings personajes,
// y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:
const estanJuntos = (personajes) => {
    while (personajes[i] === "Frodo" && personajes[i - 1] === "Sam" || personajes[i + 1] === "Sam") {
        return true
    }
    return false
}
console.log(estanJuntos(['Sam', 'Frodo', 'Legolas']))
console.log(estanJuntos(['Aragorn', 'Frodo', 'Sam']))
console.log(estanJuntos(['Sam', 'Orco', 'Frodo']))

// ____________________________________________________separar(perrosYGatos)
//Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados
// por un lado y los gatos por otro.
//uso d para perros (dog) y c para gatos (cat) porque no me toma los emojis como  validos 
const separar = (string) => {
    let perros = ''
    let gatos = ''
    for (i = 0; i < string.length; i++) {
        if (string[i] === 'd') {
            perros += 'd'
        } else {
            gatos += 'c'
        }
    }
    return perros.concat(gatos)
}
console.log(separar('ddcdcdcddccd'))
// ____________________________________________________obtenerChatStatus(usuarias)
// Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:
// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
const obtenerChatStatus = (usuarias) => {
    let cantidad = usuarias.length
    if (cantidad == 1) {
        return usuarias[0] + ' está conectada'
    } if (cantidad == 2) {
        return usuarias[0] + ' y ' + usuarias[1] + ' están conectadas'
    } else {
        return usuarias[0] + ' , ' + usuarias[1] + ' y ' + (cantidad - 2) + ' persona (s) más están conectadas'
    }
}
console.log(obtenerChatStatus(['Ada']))
console.log(obtenerChatStatus(['Ada', 'Grace']))
console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie']))
console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie', 'Anne']))
// ____________________________________________________ germinar(plantines)
//Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor.
// La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda.
//['t','p','g','p','m','p','t','p','m','p']
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) => sintaxis dela funcion splice
