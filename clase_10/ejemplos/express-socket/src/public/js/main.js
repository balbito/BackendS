const socket = io();
/**
 * io hace referencia a socket.io, se le llama asi por convencion.
 * La linea 1 permite instanciar el socket y guardarlo en la constante "socket"
 * Dicho socket es el que utilizaremos para poder comunicarnos con el socket del servidor.
 * (Recuerda que, en este punto somos "clientes", porque representamos una vista) 
 */
socket.emit("message", "Mensaje desde el cliente");

socket.on("server_message", (data) => {
    console.log(data);
});

socket.on("message_all", (data) => {
    console.log(data);
});

socket.on("message_all_2", (data) => {
    console.log(data);
});