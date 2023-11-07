const fs = require('fs');

fs.writeFileSync("./texto.txt", "Escribiendo en un archivo \nOtro texto");

if(fs.existsSync("./texto.txt")) {
    console.log("El archivo existe");

    let contenido = fs.readFileSync("./texto.txt", "utf-8")
    console.log(contenido);

    fs.appendFileSync("./texto.txt", "\nContenido añadido")

    contenido = fs.readFileSync("./texto.txt", "utf-8")
    console.log(contenido);

    fs.unlinkSync("./texto.txt")
}