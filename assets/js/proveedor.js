export class Proveedor {
    constructor(nombre, articulo, precio) {
        this.nombre = nombre;
        this.articulo = articulo;
        this.precio = precio;
    }

    getInfoProveedor() {
        return `Proveedor: ${this.nombre}`;
    }
}
