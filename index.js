const {registrar, leer} = require("./operaciones")
const arguments = process.argv.slice(2)

if (arguments[0] === "registrar") {
    if (arguments.length === 6) {
        console.log("Ingresando datos")
        registrar(arguments)
    }
    else{
        console.log("Rellena los siguientes datos")
        console.log('Elige entre "registrar" o "leer"')
        console.log("Nombre")
        console.log("Edad")
        console.log("Tipo de animal (perro, gato...")
        console.log("Color")
        console.log("Síntoma")
    }
} else if (arguments[0] === "leer") {
    console.log("Un Momento...")
    leer()
} else if (arguments[0] === undefined) {
    console.log("Ingresa los datos de tu Mascota")
} else console.log('Elige una de las opciones "registrar" o "leer"')