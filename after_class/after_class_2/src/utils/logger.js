function logger (req, res, next) { // middleware que registra todas las peticiones
    // console.log(req);
    console.log(`${req.method} - ${req.originalUrl} - ${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`);

    next();
}
 
export { logger };