"use strict";
(() => {
    class Avenger {
        //resumiendo este metodo constructor con TS
        // constructor(name:string, team:string, realName:string){
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }
        //metodo constructor resumido
        // un static no se puede modificar ni declarar dentro de un metodo constructor.
        constructor(name, team, realName, age) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.age = age;
            this.age;
        }
    }
    //private name: string = '';  //este ya no es necesario, con private en el argumento del constructor lo auto asigno.
    //public team: string = '';
    //realName: string = '';
    Avenger.age = 35;
    const antam = new Avenger('Nombre', 'Equipo', 'Realname', 5);
    //observemos como lo que declaramos dentro del avenger como privado no es accesible.
    console.log(antam.team);
    console.log(Avenger.age);
})();
