const fs = require('fs');

class ManagerPost {  // va a guardar post en una archivo

    constructor(path) { // (path) del archivo
        this.path = path; // inicializar el atributo path
        try {
            let posts = fs.readFileSync(this.path, "utf-8"); // creamos una variable posts, donde va a guardar los datos que va a recibir del archivo (es el que pasa por el constructor)
            this.posts = JSON.parse(posts); // texto que recibo lo parseo a JSON y lo almaceno dentro del atributo de la clase
        } catch {
            this.posts = [];
        }
    }

    // validate(post) {
    //     if(!post.userId || !post.id || !post.title || !post.body) { // si no existe ninguno de los atributos retorno false
    //         return false
    //     }
    //     return true // si existen todos los atributos retorno true
    // }
    async savePost(post) {
        if (!post) { // compruebo si el post me llega undefined o null
            return console.log("El post esta vacio")
        }

        const existsPost = this.posts.find((p) => p.id === post.id) 

        if(existsPost) { // si ya existe el id del post
            return console.log("El post ya existe");
        }

        this.posts.push(post); // guardamos dentro del array el post que estamos enviando

        try {
            await fs.promises.writeFile(this.path, JSON.stringify(this.posts, null, '\t'))
        } catch (error) {
            console.log(`Hubo un error al guardar los datos: ${error}`)
            return
        }
    }

    getPosts() {
        return this.posts;
    }
}

class Post { // estructura de datos para cada post
    constructor(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}

async function fetchDatos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()

        // console.log(data);

        const manager = new ManagerPost("./posts.json")

        for(let i = 0; i <= 10; i++) {
            const post = new Post(
                data[i].userId,
                data[i].id,
                data[i].title,
                data[i].body,
            )

            manager.savePost(post);
        }

        console.log(manager.getPosts());
    } catch (error) {
        console.log(`Hubo un error al utilizar fetch: ${error}`);
    }
}

fetchDatos();