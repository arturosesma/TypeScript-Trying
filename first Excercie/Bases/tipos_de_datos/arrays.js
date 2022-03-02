"use strict";
(() => {
    //en js, funciona, pero en TS no por el tipado de datos, 
    //recordar que TS nos permite evitar erroers
    //ts infiere el tipo de dato
    //si TS va a inferir que tipos de datos puede almacenar el array
    const numbers = [1, 2, 3, 4, 5, '6', 6, 7];
    //esto no se puede, por que al definir el array no le damos 
    //permisos de ingresar un array con booleanos
    //numbers.push(true);
    //ahora si podemoa agregar un false, por que se permite agregar
    //un booleano al array como tipo de dato.
    const otraArray = [1, 2, 3, 'hola', true];
    otraArray.push(false);
    //definiendo los tipos de datos que puede tener un array
    //el array esta vacio, pero podemos declaralo vacio e irle agregando 
    //datos
    const arrayDefinido = [];
    //el metodo push nos permite agregar datos al array
    arrayDefinido.push('hola');
    //usualmente los arreglos son solo de un tipo de datos
    const villans = ['nombre1', 'nombre2', 'nombre3'];
    villans.forEach(v => {
        v.toUpperCase;
    });
    //el foreach, retorna para cada elemento lo que le apliquemos y lo 
    //almacena ahi,
    //es decir recorre cada elemento, y en casa posicion ahi lo va a 
    //almacenar sea lo que sea que le hagamos al elemento.
})();
