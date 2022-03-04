"use strict";
(() => {
    //objeto 1
    let flash = {
        name: 'nombre',
        age: 23,
        powers: ['poder 1', 'poder 2']
    };
    //objeto 2
    let superMan = {
        name: 'nombre 2',
        age: 23,
        powers: ['poder 1', 'poder 2']
    };
    let nuevoHero = {
        name: 'Nombre',
        age: 2,
        powers: ['', ''],
        getName() {
            return this.name;
        }
    };
})();
