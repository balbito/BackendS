import express from 'express';
import handlebars from 'express-handlebars';
import viewRouter from './routes/views.router.js';
import __dirname from './utils.js';

const app = express();
const PORT = 5000;

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
app.use(express.static(`${__dirname}/public`));

// Routes
app.use('/', viewRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));