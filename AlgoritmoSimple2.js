/*
1. Si mi edad es la mitad de la edad de mi hermana en 2008 y la edad de mi hermana es 12, ¿Cuantos años tendremos en 2055?
*/
    const edadHermana = 12;
    const miEdad = edadHermana / 2;
    const año2055 = 2055 - 2008;

    const edadHermana2055 = edadHermana + año2055;
    const miEdad2055 = miEdad + año2055;

    console.log("En 2055 mi hermana: " + edadHermana2055 + " años.");
    console.log("En 2055 tendré: " + miEdad2055 + " años.");

/*
2. Si ingreso 1 número de 3 cifras a un sistema, ¿Cómo sé si es múltiplo de 8 y 7?
*/
numero = 123;
    //56 es multiplo de ambos numeros
if (numero % 56 === 0) {
    console.log(numero + " es múltiplo de 7 y 8.");
} else {
    console.log(numero + " no es múltiplo de 7 y 8.");
}
