// ============================================================
// SIMULADOR DE CARRITO DE COMPRAS
// ============================================================

// ---------- 1. DATOS INICIALES ----------
const primerCliente = confirm("¿Es tu primera vez en nuestra tienda?");
const cantidadProductos = parseInt(prompt("¿Cuántos productos deseas comprar?"));
const montoMinimo = 50000; // desde este subtotal se suma un 5% extra de descuento
let subTotal = 0;          // acumulador: va a ir creciendo dentro del bucle

// ---------- 2. BUCLE: carga de cada producto ----------
for (let i = 1; i <= cantidadProductos; i++) {
    const nombreProducto = prompt(`Ingrese el nombre del producto ${i}:`);
    const precioProducto = parseFloat(prompt(`Ingrese el precio de ${nombreProducto}:`));

    // ---------- 3. CONDICIONAL DENTRO DEL BUCLE: validación ----------
    if (isNaN(precioProducto) || precioProducto <= 0) {
        alert("El precio debe ser un número mayor a 0. Intente de nuevo.");
        i--; // "devuelve" la vuelta para repetir el mismo producto
    } else {
        subTotal += precioProducto;
        console.log(`Producto ${i}: ${nombreProducto} - $${precioProducto.toFixed(2)}`);
    }
}

// ---------- 4. DESCUENTOS (después del bucle, ya conocemos el subtotal) ----------
let porcentajeDescuento = 0;

if (primerCliente) {
    porcentajeDescuento += 0.10;
}
if (subTotal > montoMinimo) {
    porcentajeDescuento += 0.05;
}

// ---------- 5. CÁLCULOS ----------
const montoDescuento = subTotal * porcentajeDescuento;
const total = subTotal - montoDescuento;

// ---------- 6. MENSAJE: explica qué descuento se aplicó (if / else if / else) ----------
let detalleDescuento;

if (primerCliente && subTotal > montoMinimo) {
    detalleDescuento = "Descuento por primera compra (10%) + compra mayor a $" + montoMinimo + " (5%)";
} else if (primerCliente) {
    detalleDescuento = "Descuento por primera compra (10%)";
} else if (subTotal > montoMinimo) {
    detalleDescuento = "Descuento por compra mayor a $" + montoMinimo + " (5%)";
} else {
    detalleDescuento = "Sin descuento aplicado";
}

// ---------- 7. RESUMEN FINAL ----------
const resumen = `RESUMEN DE TU COMPRA
Productos: ${cantidadProductos}
Subtotal: $${subTotal.toFixed(2)}
${detalleDescuento}
Descuento: -$${montoDescuento.toFixed(2)}
Total a pagar: $${total.toFixed(2)}`;

console.log(resumen);
alert(resumen);