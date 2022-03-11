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
    //pero si si tiene un metodo construcotr entonces tenemos que usar super.
    //class Xmen extends Avenger {}
    class Xmen extends Avenger {
        //tengo que definirlos dentro del constructor aunque simplemente los pueda mandar a ejecutar con el metodo super
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        //no podria accder a getFullName desde una intancia pero si puedo acceder aeste metodo DesdeXman
        //esto es una forma de poder acceder  a un metodo.
        getFullNameDesdeXman() {
            console.log(super.getFullName());
        }
    }
    //por defecto me pedira las intancias de la clase de la que hereda mas las cosas
    //que tiene Xmen por defecto
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine.realName);
    console.log(wolverine.getFullNameDesdeXman());
    //protected entre private,
    //private solo puedo acceder desde la clase donde estoy al meteodo o el parametro
    //protected puedo acceder al metodo desde la clase o si es que tambien 
    //la clase hereda, en este ejemplo de la Avengers desde getFullName, por lo que
    //puedo acceder al metodo
    //solo public me permite acceder a los metodo desde las instancias
    //static me perimte acceder haciendo referencai a la clase, pero no a instancias
    //private solo dentro de la clase
    //protected solo dentro de la clase y clases que hereden de ella.g
})();
