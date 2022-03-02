"use strict";
//any es un tipo de dato, 
//es ampliamente recomendable evitar usarlo lo mas humanamente posible.
// tratar de nunca usar any
//en el tsconfig, podemos evitar usar any,
//no es recomendable, sin embargo para hacer una implementacion rapida se puede 
//usar y 
//despues la dejamos de usar haciendo bien la refactorizacion del codigo.
(() => {
    let avenger = 123;
    //al declarar una variable con let y no ponerle un tipo de dato por defecto ese 
    //any
    //const exist; esto marca error, una constante siempre debe ser inicializada.
    let exist;
    let power;
    //casting de any a X valor
    let avengerString = avenger.charAt(0);
    // accedemos a los valores de un string aunque sea numero
    //otra forma de castear
    let avengerString2 = avenger.charAt(0);
    // accedemos a los valores de un string aunque sea numero
    //si hicieras el tipado de los datos desde un inicio esto no se podria realizar ya 
    //que 
    //seria de tipo number,
    avenger = 'Dr. Strange'; // esto es permitido por que es Any, 
    //casteando a numero
    let numeroAvenger = avenger;
    let numeroAvenger2 = avenger;
    let numero = numeroAvenger.toFixed(2);
})();
