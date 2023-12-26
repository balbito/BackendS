import express from 'express';
import handlebars from "express-handlebars";
import viewRouter from "./routes/views.router.js";
import __dirname from "./utils.js"

const app = express();
const PORT = 5000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configuramos el engine
app.engine("hbs", handlebars.engine({
    extname: "hbs",
    defaultLayout: "main"
})
);

// Seteamos nuestro motor
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

// Public
app.use(express.static(`${__dirname}/public`));

// Routes
app.use("/", viewRouter);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));