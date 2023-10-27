// Definir variables que almacenen datos (nombre, edad, precio, nombres de series y películas), mostrar esos valores por consola, incrementar la edad en 1, una serie a la lista y volver a mostrarlas. Compartir la definición en el Visual Studio Code.

let nombre = "Santiago";

let series = ["Narcos Mexico", "El codigo de la discordia", "El marginal"];

let peliculas = ["El ascenso", "Top gun", "Pearl Harbor"];

let edad = 33;

console.log(nombre + " / " + edad + " / " + series + " / " + peliculas); 

series.push("Playlist");
peliculas.push("Armaggedon");
edad++;

console.log("Datos modificados");
console.log(nombre + " / " + edad + " / " + series + " / " + peliculas); 