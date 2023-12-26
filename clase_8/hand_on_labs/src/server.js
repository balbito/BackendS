import express from 'express';
import petRouter from './routes/pets.routers.js';
import usersRouter from './routes/users.routers.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Ruta main
app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido"
    });
});

// Routes
app.use('/api/pets', petRouter); // defino la ruta y el router
app.use('/api/users', usersRouter);


app.listen(5000, () => console.log("Server listening on port 5000"));