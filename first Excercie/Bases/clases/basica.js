"use strict";
(() => {
    class Avenger {
        //todas las variables deben ser inicializadas dentro de TS, si no declaramos su 
        //alcance por defecto son publicas.
        //forma larga de crear un constructor, y con el ? las hacemos opciona;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    //a esas variables podemos acceder haciendo referencia a la clase no a la 
    //instancia de la clase
    Avenger.age = 35; //variable opcional
    const antam = new Avenger('Nombre', 'Equipo', 'Realname');
    //no tengo acceso a la variable name, por que es privada, solo tengo acceso dentro de la clase.
    //tampoco podemos ver a la variable static por que no e publica, pero si podemos 
    //acceder a las variables estaticas haciedo referencia a la clase como en php a 
    //las que accedemos por ::
    console.log(antam.realName);
    console.log(Avenger.age); // si podemos acceder a la variable estatica pero 
    //solamente si se accede directamente desde la clase.
})();
