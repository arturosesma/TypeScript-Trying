"use strict";
(() => {
    //metodos constructores privados
    //son usados para controlar la manera en la que
    //las instancias de la clase son ejecutadas
    //se usan para singletons, las cuales ya no se usan pero noe esta demas saberlo
    //controlamos la forma en que las instancias son creadas.
    //podemos crear varias instancias de la misma clase en diferentes objetos, la 
    //idea de los constructores privados es controlar como el constructor va a ser llamado
    //para ello usamos la palabra private dentro del constructor.
    //constrolamos se manda a llamar el metodo
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy un apocalipsis unico');
            }
            return Apocalipsis.instance;
        }
        changeName(newNAme) {
            this.name = newNAme;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    //usando el principio singleton
    //esto seria de manera normal
    // const apocalipsis1 = new Apocalipsis('soy Apocalipsis 1');
    // const apocalipsis2 = new Apocalipsis('soy Apocalipsis 2');
    // const apocalipsis3 = new Apocalipsis('soy Apocalipsis 3');
    // console.log(apocalipsis1.name, 
    //     apocalipsis2.name, 
    //     apocalipsis3.name
    // );
})();
