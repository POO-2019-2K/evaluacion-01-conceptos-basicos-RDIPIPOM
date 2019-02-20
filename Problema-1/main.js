import Factura from "./Factura.js";

let factura1 = new Factura(1, 'Edgar Marcelino', 100, 116);

factura1.nombre = 'Alexander Jesús';
console.log(factura1.nombre);
factura1.getInformacion();
