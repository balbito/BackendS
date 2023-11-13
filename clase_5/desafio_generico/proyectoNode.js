const objeto = {};

for(let i = 0; i < 10000; i++) {
    const numAleatorio = Math.floor(Math.random() * 20) + 1; 
    if(objeto[numAleatorio]) { // si dentro de objeto existe la clave numAleatorio sumale 1
        objeto[numAleatorio]++;
    } else { // si numAleatorio no existe como clave dentro del objeto el valor en 1.
        objeto[numAleatorio] = 1;
    }
}

console.log(objeto);