class TicketManager {

    #precioBaseDeGanancia = 0.15;

    constructor() {
        this.eventos = []
    }

    // va a devolver el array de eventos
    getEventos() {
        return this.eventos;
    }

    agregarEvento(evento) {
        evento.precio += evento.precio * this.#precioBaseDeGanancia; // actualizamos el precio del evento


        // definimos el id
        // chequeamos si existe algun evento dentro del array
        if (this.eventos.length === 0) {
            evento.id = 1;
        } else {
            // Autoincremental
            evento.id = this.eventos[this.eventos.length - 1].id + 1; // obtengo el id del ultimo evento y le sumo 1, asginarle el id al evento
        }

        this.eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find((evento) => evento.id === idEvento); // busco con find y voy a obtener el evento por id

        if (!evento) {
            return "no existe el evento";
        }
        
        // chequeo con includes que no exista el usuario en ese evento
        if (!evento.participantes.includes(idUsuario)) {
            evento.participantes.push(idUsuario);
        } else {
            return "el usuario ya existe";
        }
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const evento = this.eventos.find(evento => evento.id === idEvento); // busco el evento

        if (!evento) {
            return "el evento no existe";
        }
        
        //  creo un nuevo evento con los valores del evento anterior, cambiando lugar fecha y el id 
        const newEvento = {
            ...evento,
            Lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            id: this.eventos[this.eventos.length - 1].id + 1,
            participantes: []
        }

        this.eventos.push(newEvento); // agrego este evento al array de eventos que ya tengo
    }
}

class Evento {
    constructor(nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.precio = precio;
        this.capacidad = capacidad;
        this.fecha = fecha;
        this.participantes = [];
    }
}

// Pruebas 
const manejadorEventos = new TicketManager();

console.log("agregando Evento coder 1 para Argentina, precio: 200, para 50 participantes");
manejadorEventos.agregarEvento(new Evento("Evento coder 1", "Argentina", 200, 50));

console.log("agregando al evento con id 1 la participacion del usuario 2");
manejadorEventos.agregarUsuario(1, 2);

console.log("creando una copia vacia del evento 1 pero en Mexico y para el 2024");
manejadorEventos.ponerEventoEnGira(1, "Mexico", "30/11/2024");

console.log(manejadorEventos.getEventos());