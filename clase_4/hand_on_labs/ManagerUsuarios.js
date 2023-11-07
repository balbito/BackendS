const fs = require('fs')

class ManagerUsuarios {
    // creo un constructor y le paso el nombre del archivo
    constructor(fileName) {
        this.fileName = fileName;
       // si exsite este archivo
       if(fs.existsSync(fileName)) {
          try {
            let usuarios = fs.readFileSync(fileName, "utf-8")
            this.usuarios = JSON.parse(usuarios)
          } catch (error) {
            this.usuarios = []; // puede ser que exista el archivo pero que este vacio, eso me da error, lo capturo con el catch.
          }
       } else {
        this.usuarios = [];
       }
    }
    
    async saveFile(data) {
        // recibe los usuarios(data), va a escribir en el archivo
        try {
            await fs.promises.writeFile(this.fileName, JSON.stringify(data, null, '\t')); // se llama a esta funcion que va a sobreescribir todo el archivo.
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    
    // creo metodo y recibe usuario.
    async addUsuario(usuario) {
        // recibe un usuario que va a ser un objeto creado en base a la class Usuario
        this.usuarios.push(usuario) // se agrega al array de usuarios

        const respuesta = await this.saveFile(this.usuarios); // guardamos todos los usuarios en el archivo

        if(respuesta) {
            console.log("Usuario creado");
        } else {
            console.log("Hubo un error al crear un usuario");
        }
    } 
    
    // creo metodo
    consultarUsuarios() {
        console.log(this.usuarios);
        return this.usuarios;  // nos devuelve los usuarios
    }  
}

class Usuario {
    constructor (nombre, apellido, edad, curso) {  // creo clase y constructor y le paso los parametros(datos)
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }
}

// Pruebas 
const usuario1 = new Usuario ("Mariano", "Lopez", 26, "Backend");
const usuario2 = new Usuario ("Felipe", "Lopez", 36, "Backend");
const usuario3 = new Usuario ("Arturo", "Garcia", 26, "Frontend");

const manager = new ManagerUsuarios("./Usuarios.json");

manager.addUsuario(usuario1);
console.log(manager.consultarUsuarios());

manager.addUsuario(usuario2);
manager.addUsuario(usuario3);
console.log(manager.consultarUsuarios());
