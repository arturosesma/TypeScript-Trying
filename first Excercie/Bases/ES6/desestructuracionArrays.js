"use strict";
(() => {
    //desetructuracion de arreglos
    const avengersArray = ['Cap. America', 'Ironman', 'Hulk'];
    //estamos accediendo al valor de esa posicion de un array indexado.
    const ironman = avengersArray[1];
    const [, ironamn,] = avengersArray;
    console.log(ironman);
    //para desestructurar objetos las variables se deben de llamar como las propiedades, 
    //pero en lo sarrayas como depende totalmente de la posicion, 
    //puede ser el ombre que sea, solo vasta con coincidir en el es espaciamiento.
    //desestrcuturando una tupla
    const otroArray = ['string', true, '3455', 234];
    //extraemos solo el valor de la cuarta posicion y lo colocamos 
    //dentro de la variable valorNumerico
    const [, , , valorNumerico] = otroArray;
    console.log(valorNumerico);
    //la desestrucutracion funciona correctamente cuando tenemos bien estructurado 
    //el objeto y el array
})();
