const moment = require("moment");

let fechaActual = moment();
let fechaNacimiento = moment("1990-08-18");

if(fechaNacimiento.isValid()) {
    console.log("es valido");
    let dias = fechaActual.diff(fechaNacimiento, "days");
    console.log(dias);
}

