// 1. Declarar variables que voy a necesitar
// 2. Repetir mientras...
// 3.   Pedir el nombre del producto
// 4.   Si escribió "salir"...

const primerCliente = confirm ("¿Es tu primera vez en nuestra tienda?");
const cantidadProductos = parseInt(prompt("¿Cuántos productos deseas comprar?"));
let subTotal = 0;
console.log("¿Primer cliente?", primerCliente);
console.log("Cantidad de productos:", cantidadProductos);
const nombreProducto = prompt("Ingrese el nombre del producto que desea comprar:");
const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
subTotal += precioProducto;

console.log("producto:", nombreProducto);
console.log("subtotal:", subTotal);
