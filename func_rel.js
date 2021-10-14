/* Objetivo del desafío complementario:

Definir tres funciones cuyas llamadas secuenciales resuelvan un proceso complejo.

Procesamiento elegido: calcular valor FOB en importación de guantes descartables de China.

El valor FOB es el valor de la mercancía puesta a bordo de un transporte marítimo, el cual abarca tres conceptos: 1) costo de la mercancía en el país de origen
2) transporte de los bienes
3) derechos de exportación */

let guantes
let cantidad
let costoInicial = 0;
let subtotal = 0;
let transporte = 0;
let total = 0;


function calcularCosto () {

    do {
        guantes = prompt("Seleccione el tipo de guante que desea comprar: latex, vinilo, nitrilo").toLocaleUpperCase();
        cantidad = parseInt(prompt("Seleccione la cantidad deseada en cajas (100 unidades x caja)"));

        switch (guantes) {
            case "LATEX":
                costoInicial = 500;
                break;
            case "VINILO":
                costoInicial = 1500;
                break;
            case "NITRILO":
                costoInicial = 1250;
                break;
            default :
                alert("A ingresado datos inválidos");
                guantes = "";
                cantidad = 0;
        }

        subtotal = subtotal + costoInicial * cantidad;
        alert ("El costo inicial de su compra es de" + " " + subtotal + " " + "ARS")
        otroProducto = confirm("¿Desea agregar otro producto?")
    } while (otroProducto);
}

function calcularTransporte (subtotal) {
    let destino = prompt("Seleccione puerto de destino: Buenos Aires, Rosario, Campana").toUpperCase();

    if (destino=="BUENOS AIRES") {
        transporte = subtotal + subtotal * 0.23;
    }
    else if (destino=="ROSARIO" || destino=="CAMPANA") {
        transporte = subtotal + subtotal * 0.20;
    }
    else {
        alert("Ingrese datos válidos");
        destino = prompt("Seleccione puerto de destino: Buenos Aires, Rosario, Campana").toUpperCase(); 
    }

    alert("El subtotal de su compra con transporte incluído es de" + " " + transporte + " " + "ARS");

    return transporte;
}

function calcularDerechosExpo (transporte) {
    alert("El costo de exportación de guantes descartables es del 5%")
    total = transporte + transporte * 0.05;
    alert("El total de su compra es de" + " " + total + " " + "ARS");

    return total;
}

alert("¡Bienvenidos a DROVER SA, liderazgo en guantes descartables!")

calcularCosto ();
calcularTransporte (subtotal);
calcularDerechosExpo (transporte);

alert (`
    Detalle de la compra:
    - Subtotal ${subtotal}
    - Transporte ${transporte}
    - Derechos expo: 5%

    Total = $${total}
`);






        
    