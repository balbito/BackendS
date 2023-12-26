import express from 'express';
import handlebars from 'express-handlebars';
import viewRouter from './routes/views.routes.js';
import __dirname from './utils.js';

// Socket Server
import { Server } from 'socket.io'; // Este import es nuevo, este "Server" se creara a partir del server HTTP

const app = express();
const PORT = 5000;
const httpServer = app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); // Solo el server HTTP

// Instanciar websocket, creamos un servidor para sockets viviendo dentro de nuestro servidor principal
const socketServer = new Server(httpServer); // socketServer sera un servidor  para trabajar con sockets


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// Configuramos el engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs', // nombre de la extension del archivo
    // Plantilla principal
    defaultLayout: 'main' // toma la plantilla principal
}));

// Seteamos nuestro motor
app.set('view engine', 'hbs'); // seteamos el motor de plantillas dentro de nuestro servidor
app.set('views', `${__dirname}/views`) // setear la carpeta donde se van a encontrar las plantillas, que el motor de plantillas va hacer uso

// Public
app.use(express.static(`${__dirname}/public`)); // Es importante para tener archivos js y css en plantillas

// Routes
app.use('/', viewRouter);

const users = [];

// Socket comunication
socketServer.on("connection", (socketClient) => {
    console.log("Nuevo cliente conectado");
// socketClient.on("message", (data)=>{}) significa: "escuchar cuando el socket conectado envie un evento de tipo 'message'"
// En cuanto se reciba un evento de tipo "message", con la 'data' que se envio, mostrarla por consola.
    socketClient.on("message", (data) => {
        console.log(data);
    });
   
// El server tiene 3 formas de mandar mensajes
    socketClient.emit("server_message", "Mensaje desde el servidor");
// Mensaje para todos, menos para el que hace la conexion 
    socketClient.broadcast.emit("message_all", `${socketClient.id} Conectado`);
// Mensaje para todos 
    socketServer.emit("message_all_2", "Mensaje para todos");

    // Mensajes del form
     socketClient.on("form_message", (data) => {
        console.log(data);
        users.push(data);
        socketClient.emit("users_list", users);
     });
     
     socketClient.emit("users_list", users);
})

