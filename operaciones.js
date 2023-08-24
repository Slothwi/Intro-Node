const fs = require("fs")

const registrar = (arguments) =>{
    const citas = fs.readFileSync("citas.json", "utf8")
    const nuevaCita = JSON.parse(citas)
    nuevaCita.push({
        nombre: arguments[1],
        edad: arguments[2],
        tipoAnimal: arguments[3], 
        color: arguments[4],
        sintoma: arguments[5]
    })
    fs.writeFileSync("citas.json", JSON.stringify(nuevaCita))
}

const leer = () =>{
    const dataCitas = fs.readFileSync("citas.json", "utf8")
    const dataCitasJson = JSON.parse(dataCitas)
    if(dataCitasJson[0] === undefined){
        console.log("No hay ninguna cita agendada")
    }
    else console.log(dataCitasJson)
}

module.exports = {registrar, leer}