"use strict";
(() => {
    // number, este tipo de dato es para numeros independientemente de si es entero o flotanet
    let numero = 12;
    let numera;
    const constante = 20.034324535;
    // Number()  --> es una funcion que convierte un dato a un numero, 
    // pero si no se pude retorna un NaN, non a number que es un numero, pero no lo es, 
    //es decir nos permite manejar excepciones.
    let convertirANumero = 'Hola';
    let convertirANumero2 = '123';
    let convertirANumero3 = '123ABC';
    let numeroConvertido1 = Number(convertirANumero);
    let numeroConvertido2 = Number(convertirANumero2);
    let numeroConvertido3 = Number(convertirANumero3);
    console.log(numeroConvertido1);
    console.log(numeroConvertido2);
    console.log(numeroConvertido3);
});
