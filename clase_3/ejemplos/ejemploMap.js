// const numeros = [1, 2, 3, 4, 5, 6];

// function cuadrado(numero, index) {
//     console.log(index);
//     return numero ** 2;
// };

// const nuemrosNuevos = numeros.map(cuadrado);

// const numeros2 = [1, 2, 3, 4, 5, 6];

// const nuemrosNuevos2 = numeros.map((numero) => {
//     return numero + 1;
// });

// console.log(nuemrosNuevos);
// console.log(nuemrosNuevos2);


// MAP POR DENTRO
function mapCustom(array, callback) {
    let nuevoArray = []; // inicializo un array vacio

    for (let i = 0; i < array.length; i++) { // recorro el array
        let nuevoValor = callback(array[i]);  // realiza una operacion en callback dentro del valor del array accediendo a la posicion
        nuevoArray.push(nuevoValor); // agrego el nuevo valor dentro del array nuevo.
    }

    return nuevoArray; // se devuelve el array nuevo
}

const numeros = [2, 3, 4, 5, 6];

const nuevoArr = mapCustom(numeros, (valor) => {
    return valor * 2;
});

console.log(nuevoArr);

// EXTRA 

Array.prototype.mapCustom = function (callback) {

    let nuevoArray = [];

    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i]);
        nuevoArray.push(nuevoValor);
    }

    return nuevoArray;
};

numeros.mapCustom((valor) => {
    console.log(valor);
    return valor * 2;
});
