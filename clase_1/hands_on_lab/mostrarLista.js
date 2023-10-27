const mostrarLista = (arr) => {
    if(arr.length == 0) return "Lista vacia";

    arr.map((elementos) => {
        console.log(elementos);
    })

    return `El array tiene ${arr.length} elementos`;
};

// Casos de prueba 
console.log(mostrarLista([]));
console.log(mostrarLista([1]));
console.log(mostrarLista([23, 32, 32, 23, "Nombre", true]));