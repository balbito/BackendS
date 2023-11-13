// const express = require('express'); commonjs
import express from 'express'; // module

const app = express();

app.get("/", (request, response) => {
   response.send("<h1> Hola mundo desde express </h1>")
})

// Desafio de clase
app.get("/bienvenido", (request, response) => {
    response.send("<h1 style='color:blue'> Bienvenido weyyy</h1>");
});

app.get("/usuario", (request, response) => {
    response.json({
        nombre: "Santiago",
        apellido: "Balbarrey",
        edad: 33,
        correo: "santi@gmail.com"
    });
}); 

app.listen(8080, () => console.log("Server listening on port 8080"));