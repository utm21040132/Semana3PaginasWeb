/*
  Saque un préstamo por 30,000 pesos de los cuales debo pagar 384 pesos semanales si me están cobrando el 16% de interés, ¿En cuantas semanas pagaré mi préstamo?
 */


    // Variables iniciales
    const prestamoInicial = 30000;
    const interesAnual = 0.16;
    const pagoSemanal = 384;
    
    // Calcular el monto total del préstamo con interés
    // Interés anual = prestamoInicial * interesAnual (el 1 es para aplicar un 116%)
    const montoConInteres = prestamoInicial * (1 + interesAnual);
    
    // Calcular cuántas semanas se necesitan para pagar el préstamo
    //Math.ceil es para redondear, no puedes pagar fracciones de semana
    const semanasNecesarias = Math.ceil(montoConInteres / pagoSemanal);
    
    console.log("Monto total del préstamo con interés: $" + montoConInteres.toFixed(2));
    console.log("Número de semanas necesarias para pagar el préstamo: " + semanasNecesarias);