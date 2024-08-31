import { Proveedor } from './proveedor.js';

export class TipoProveedor extends Proveedor {
    constructor(nombre, articulo, precio, pais, esInternacional) {
        super(nombre, articulo, precio);
        this.pais = pais;
        this.esInternacional = esInternacional;
    }

    getInfoProveedor() {
        return `${super.getInfoProveedor()}, País: ${this.pais}, Internacional: ${this.esInternacional ? 'Sí' : 'No'}`;
    }
}
