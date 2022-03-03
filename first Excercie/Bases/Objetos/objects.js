"use strict";
(() => {
    //objetos literales en JS
    //es un objeto literal donde podemos crear un contenedor con diversos valores, 
    //esto es un objeto.
    //si ponemos el cursos encima nos indica el tipo de datos que tienen
    //este es un objeto de tipo JSON
    // si ponemos el cursor veremos el tipo de dato
    let flash = {
        name: 'Arturo Sesma',
        age: 21,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    // el objeto debe tener las propiedades que estan definidas arriba
    //y deben ser los valores del tipo de dato,
    // no podemos poner otro tipo de dato que no es el que vamos a poner
    //TS marcara un error de un objeto definido hasta que no este completo.
    flash = {
        name: 'otro name',
        age: 32,
        powers: ['strings', '']
        // getNombre(){
        //     return this.name;
        // }
        //que pasa si quiero agregar otra propiedad o quiero hacer
        //de mis ppropiedades dinamicas
        //eso se ve en la siguiente leccion.
    };
    //
})();
