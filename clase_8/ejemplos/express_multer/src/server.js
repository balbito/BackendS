import express from 'express';
import { loader } from '../utils/multer.js'; // importamos el loader previamente configurado

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));
app.use(express.static('public'));

// loader
app.post("/", loader.single('image'), (req, res) => {
    if(!req.file) {
        return res.status(500).json({
            error: "Hubo un error al subir el archivo"
        });
    }

    console.log(req.file);

    console.log(req.body);

    res.json({
        message: "El archivo se subio correctamente"
    })
})

app.listen(5000, () => console.log("Server listening on port 5000"));

