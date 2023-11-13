const http = require('http');

const server = http.createServer((request, response) => { // servidor creado

    if(request.method === "GET" && request.url === "/") {
        response.end("Mi primer servidor con node js en Coderhouse");
    }

    if(request.url !== "/") {
        response.end("Error pagina no encontrada");
    }
    
});

server.listen(8080, () => {  // escucha el servidor
    console.log("Server listening on port 8080");
})  