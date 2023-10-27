class ProductManager {

    constructor () {
      this.products = [];
    }
     
    addProduct(title, description, price, thumbnail, code, stock) {
        const productCodeExists = this.products.some(product => product.code === code);
        if (productCodeExists) {
            return console.log("Ya existe un producto con ese codigo");
        }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return console.log("Todos los campos son obligatorios");
        }

        const product = new Product(title, description, price, thumbnail, code, stock);
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
       const product = this.products.find(product => product.id === id);

       if(!product) {
        return console.log("No se ha encontrado");
       }else {
       return product;}
    }

}

class Product {
    constructor (title, description, price, thumbnail, code, stock) {
        this.id = Product.idCounter++,
        this.title = title,
        this.description = description,
        this.price = price,
        this.thumbnail = thumbnail,
        this.code = code,
        this.stock = stock
    }
}

Product.idCounter = 1;

const manejadorProductos = new ProductManager();
// manejadorProductos.getProducts();
// console.log(manejadorProductos);
manejadorProductos.addProduct("producto prueba", "este es un producto de prueba", 200, "sin imagen", "abc123", 25);
manejadorProductos.addProduct("producto prueba", "este es un producto de prueba", 200, "sin imagen", "abc123", 25);
// console.log(manejadorProductos);
manejadorProductos.addProduct("producto prueba2", "este es un producto de prueba2", 300, "sin imagen2", "abc153", 35);
// console.log(manejadorProductos);
manejadorProductos.getProducts();
// console.log(manejadorProductos);
manejadorProductos.getProductById();
console.log(manejadorProductos);


