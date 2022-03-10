"use strict";
(() => {
    //herencia
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('constructor siendo mandado a llamar');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    //ahora Xmen dispone de Avenger + lo que le hagamos 
    //si mi clase que heredo no tiene un metodo constructor mandara a llamar al metodo constructor de su clase padre,
    //pero si si tiene un metodo consutrctor entonces tenemos que usar super.
    //class Xmen extends Avenger {}
    class Xmen extends Avenger {
        constructor() { }
    }
    //por defecto me pedira las intancias de la clase de la que hereda mas las cosas
    //que tiene Xmen por defecto
    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine.realName);
})();
