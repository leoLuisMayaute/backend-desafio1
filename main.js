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

    addBook(nuevoLibro) {
        this.libros.push()
        return this.libros;
    }

    getBookNames() {
        nombresLibros = [];

        for (i = 0, i < this.libros.length, i++) {
            nombresLibros.push(this.libros[i][0]);
        }
        return nombresLibros;
    }
}


const Leo = new Usuario("Leonardo", "Mayaute", [{ nombre: "Diario", autor: "Ana Frank" }, { nombre: "La amigdalitis de Tarzan", autor: "Alfredo Bryce Echinique" }], ["gato", "conejo"]);


console.log(Leo.getFullName());
console.log(Leo.addMascota("perro"));
console.log(Leo.countMascotas());