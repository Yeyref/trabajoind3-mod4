import { Proveedor } from './proveedor.js';
import { TipoProveedor } from './tipoproveedor.js';

let proveedores = [];
console.log(Proveedor);

function crearTablaProveedores(proveedores) {
    const tabla = document.createElement('table');
    tabla.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Artículo</th>
            <th>Precio</th>
            <th>País</th>
            <th>Internacional</th>
            <th>Impuesto Correspondiente</th>
        </tr>
        ${proveedores.map(proveedor => `
        <tr>
            <td>${proveedor.nombre}</td>
            <td>${proveedor.articulo}</td>
            <td>${proveedor.precio}</td>
            <td>${proveedor.pais || 'N/A'}</td>
            <td>${proveedor.esInternacional ? 'Sí' : 'No'}</td>
            <td>${calcularImpuesto(proveedor).toFixed(2)}</td>
        </tr>
        `).join('')}
    `;
    document.getElementById('tablaProveedores').innerHTML = '';
    document.getElementById('tablaProveedores').appendChild(tabla);
}

function calcularImpuesto(proveedor) {
    const tasaImpuesto = proveedor.esInternacional ? 0.2 : 0.1;  // 20% para internacionales, 10% para nacionales
    return proveedor.precio * tasaImpuesto;
}

document.querySelector('#formProveedor').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const articulo = document.querySelector('#articulo').value;
    const precio = parseFloat(document.querySelector('#precio').value);
    const pais = document.querySelector('#pais').value;
    const esInternacional = document.querySelector('#internacional').checked;

    const nuevoProveedor = new TipoProveedor(nombre, articulo, precio, pais, esInternacional);
    console.log(nuevoProveedor);
    proveedores.push(nuevoProveedor);
    crearTablaProveedores(proveedores);


    document.querySelector('#formProveedor').reset();
});
