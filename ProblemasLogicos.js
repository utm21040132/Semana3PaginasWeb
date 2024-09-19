/*
1. Trabajo en una empresa en la cual me pagan por día y trabajo de lunes a viernes. 
El lunes me pagan 120, pero después me duplican el sueldo del día anterior restándole lo de el lunes y sumándole 34. 
¿Cuánto gano cada día? 
*/



    let lunes = 120; //Paga del lunes
    let martes =  lunes * 2  - lunes + 34;
    let miercoles = martes * 2 - lunes + 34;
    let jueves = miercoles * 2 - lunes + 34;
    let viernes = jueves * 2 - lunes + 34;

    //Pagan el doble del dia anterior menos lo del lunes


    //Imprimo todo, hay alguna forma más rapida?
    console.log("Lunes: $" + lunes);
    console.log("Martes: $" + martes);
    console.log("Miércoles: $" + miercoles);
    console.log("Jueves: $" + jueves);
    console.log("Viernes: $" + viernes);



/*
2. Tengo una biblioteca, la cual vende entre 30 y 40 libros al dia y compra  de 8 a 10 libros al dia.
El dia de ayer se vendieron 38 libros y compramos 8.
Si pagamos 90 pesos por la compra de cada libro
y la venta es igual al triple producto de la compra menos un cuarto de la compra mas el 30% de compra de cada libro.
¿Cuanto dinero gane el dia de ayer?
 */

    let librosVendidos = 38; // Libros que se vendieron
    let librosComprados = 8; // Libros que se compraron
    let precioCompraPorLibro = 90; // Precio por libro comprado
    
    // Calcular el costo total de la compra
    let costoTotalCompra = librosComprados * precioCompraPorLibro;
    
    // El triple de la compra - un cuarto de la compra + el 30% (.30) de cada libro(de los 8 es la compra total)
    let ventaTotal = 3 * costoTotalCompra - (1 / 4 * costoTotalCompra) + (0.30 * costoTotalCompra);
    
    // Imprimimos lo que sale
    console.log("Libros vendidos ayer: " + librosVendidos);
    console.log("Libros comprados ayer: " + librosComprados);
    console.log("Costo total de la compra: $" + costoTotalCompra);
    console.log("El día de ayer ganaste $" + ventaTotal.toFixed(2) + " con la venta de libros.");

