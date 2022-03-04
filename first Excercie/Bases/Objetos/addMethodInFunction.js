"use strict";
(() => {
    //this is a defined function, in this function we want to add a method but the method
    //is not declarated in our function.
    // definimos el nombre de la funcion que pasa como 
    //let flash: {name:string, age?:number, powers: string[], getNombre():string} = {
    //tambien podemos definirla de esta manera
    let flash = {
        name: 'otro name',
        age: 32,
        powers: ['strings', ''],
        getNombre() {
            return this.name;
        }
    };
    flash = {
        name: 'otro name',
        age: 32,
        powers: ['strings', ''],
        getNombre() {
            return this.name;
        }
    };
    console.log(flash.getNombre); // recibimos el return de la funcion.
})();
