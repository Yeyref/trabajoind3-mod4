export class Articulo {
    constructor(name, email, telefono) {
        this.name = name;
        this.email = email;
        this.telefono = telefono;
    }

    getInfoProveedor() {
        return `Proveedor: ${this.name}, Telefono: ${this.telefono}`;
    }
}
