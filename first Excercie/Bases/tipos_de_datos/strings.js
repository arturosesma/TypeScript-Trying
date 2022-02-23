"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const superWoman = 'Super woman';
    const superCcat = 'super Gato';
    // si usamos comillas simples, y queremos usar una comilla dentro del string necesitamos usar backslach
    let backslash = 'hola\'s';
    //si usamos comillas dobles, y queremos usar una comilla dentro, entonces podemos escribir normal, pero es mejor usan simples por que hace mas ligero al codigo.
    let doubleQuotes = "hola's";
    //back ticks
    let backTiksOrbackQuotes = `otro string`;
    //si definimos nuestros tipos de datos, tenemos acceso a los metodos propios de los datoss.
    console.log(backTiksOrbackQuotes.indexOf); //el intelicense nos permite este tipo de cosas en VSC.
    //accediendo a una letra en especifico
    // el ? dice, si es nullo, aqui me corto y no hago nada, si tiene valor sigo.
    console.log((_a = superCcat[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();
