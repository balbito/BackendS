import express from "express";

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));  // middlewares, funcion que se utiliza para las peticiones

const usuarios = [
    {
        id: 1,
        nombre: "Emiliano",
        edad: 26,
    },
    {
        id: 2,
        nombre: "Roberto",
        edad: 35,
    },
    {
        id: 3,
        nombre: "Mauro",
        edad: 21,
    },
];

app.get("/", (req, res) => {
    // Ejemplo URL: http://localhost:5000/?nombre=Emiliano
    console.log(req.query.nombre); // ?key=valor

    const { nombre, edad, ciudad } = req.query;
    console.log(nombre, ciudad, edad);

    if (nombre) {
        const usuario = usuarios.find((user) => user.nombre === nombre);

        if (usuario) {
            console.log(usuario)
            return res.send(`Bienvenido ${usuario.nombre}!`);
        } else {
            return res.send("Bienvenido invitado!");
        }
    }

    res.send("Bienvenido invitado!");
});

app.get("/usuarios", async (req, res) => {
    const { limit } = req.params;

    // const datos = await getDatos();

    if (limit) {
        // Lmitarian el array de productos
    }
    res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
    // Ejemplo URL: http://localhost:5000/usuarios/1
    // Ejemplo URL: http://localhost:5000/usuarios/valor
    console.log(req.params);
    const { id } = req.params;

    const usuario = usuarios.find((user) => user.id === Number(id));

    if (usuario) {
        res.json(usuario);
    }
    res.json({ error: "User not found" });
})



app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));