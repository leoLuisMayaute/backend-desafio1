class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota);
        return this.mascotas;
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombreLibro, autorLibro) {
        let nuevoLibro = [];
        nuevoLibro.push(nombreLibro);
        nuevoLibro.push(autorLibro);
        this.libros.push(nuevoLibro);
        return this.libros;
    }

    getBookNames() {
        let nombresLibros = [];

        for (let i = 0; i < this.libros.length; i++) {
            nombresLibros.push(this.libros[i][0]);
        }
        return nombresLibros;
    }
}


const leo = new Usuario("Leonardo", "Mayaute", [{ nombre: "Diario", autor: "Ana Frank" }, { nombre: "La amigdalitis de Tarzan", autor: "Alfredo Bryce Echinique" }], ["gato", "conejo"]);


console.log(leo.getFullName());
console.log(leo.addMascota("perro"));
console.log(leo.countMascotas());
console.log(leo.addBook("Madame Bovary", "Gustave Flaubert"));
console.log(leo.getBookNames());
