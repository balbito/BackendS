const fs = require ('fs');

const fecha = new Date().toLocaleString();
// console.log(fecha);

fs.writeFile("./fecha_hora.txt", `${fecha}`, (error) => {
    if (error) {
        return console.log("No se puede dar fecha y hora");
    }
    console.log(`${fecha}`)

    fs.readFile("./fecha_hora.txt", "utf-8", (error, contenido) => {
        if (error) {
            return console.log("No se pudo leer fecha y hora");
        }
        console.log(contenido);
    })
} )