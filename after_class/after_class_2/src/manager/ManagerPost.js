import fs from 'fs';

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
            console.log("El post ya existe");
            throw Error(`Post with id ${post.id} already exists`);
        }

        try {
            this.posts.push(post); // guardamos dentro del array el post que estamos enviando
            await fs.promises.writeFile(
                this.path, JSON.stringify(this.posts, null, "\t")
            )
    }  catch (error) {
            console.log(`Hubo un error al guardar los datos: ${error}`);
            throw Error("Hubo un error al crear el post: " + error);
        }
    }

    async deletePost(id) {
        const post = this.posts.find((p) => p.id === id);
    
        if (!post) {
          console.log("El post no existe");
          throw Error("El post no existe");
        }
    
        const index = this.posts.findIndex((p) => p.id === id);
    
        try {
          this.posts.splice(index, 1);
          await fs.promises.writeFile(
            this.path,
            JSON.stringify(this.posts, null, "\t")
          );
        } catch (error) {
          console.log(`Hubo un error al guardar los datos: ${error}`);
          return;
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

export { ManagerPost, Post};