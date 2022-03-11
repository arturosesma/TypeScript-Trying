"use strict";
(() => {
    //las clases abstractas no se pueden instanciar pero si heredar
    //es decir puede que tengamos una clase padrea en comin para 
    //muchas clases hijas.
    //pero no vamos a necesitar instanciar a la clase padre nunca,
    //para ello son las clases abstractas
    class Mutante {
        constructor(name, realName) {
            this.name = name;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return ' mundo salvado';
        }
    }
    class Villan extends Mutante {
        conquistarMundo() {
            return 'mundo conquistado';
        }
    }
    //marca un herror por que no podemos crear instancias de una clase abstracta.
    //let wolverine = new Mutante('Wolverine', 'Logan');
    //pero este se instancia de una clase que no es abstracta pero que su clase si hereda de una abstracta.
    let wolverine = new Xmen('Wolverine', 'Logan');
    let magneto = new Villan('magneto', 'maguns');
    //aqui vemos que ambas clases aunque sean diferentes herendan del mismo clase padre.
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());
    //aparte de ser clases modelos para otras clases 
    //me sirve par aindicar que esetoy esperando algo que hay sido extendido de la clase
    //se que voy a recibir como argumeto un objeto de viene de una clase que hereda de una clase abstracta
    const printName = (character) => {
        console.log(character.name);
    };
    printName(magneto);
})();
