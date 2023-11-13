import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();
const PORT = 8080;
app.use(express.urlencoded({ extended: true }));

const ProductManagerOnline = new ProductManager("./src/products.json");

app.get("/products", async (req, res) => {
    try {
        const { limit } = req.query;
        const products = await ProductManagerOnline.getProducts();

        let responseProducts = products;

        if (limit && limit <= 5) {
            responseProducts = products.slice(0, limit);
        }

        res.json(responseProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const products = await ProductManagerOnline.getProductById(Number(id));

        if(products){
          return res.json(products);  // Devuelve la respuesta y sale de la función
        }

        // Si products no existe, envía una respuesta indicando que no se encontró el producto
        res.status(404).json({ error: "Product not found" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));