(()=>{

    class Avenger {
        //private significa que voy a tener acceso a esta propiedad perosolo denro de esta clase
        private name: string;

        //public significa que puede ser accedida desde fuera de la clase
        //si no defino su alcance por defecto es publica
        public team: string;
        realName: string;

        //a esas variables podemos acceder haciendo referencia a la clase no a la instancia de la clase
        static age?: number = 35; //variable opcional


        //todas las variables deben ser inicializadas dentro de TS, si no declaramos su alcance por defecto son publicas.
    
        //forma larga de crear un constructor, y con el ? las hacemos opciona;
        constructor(name:string, team:string, realName:string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antam: Avenger = new Avenger('Nombre', 'Equipo', 'Realname');
    

    //no tengo acceso a la variable name, por que es privada, solo tengo acceso dentro de la clase.
    //tampoco podemos ver a la variable static por que no e publica, pero si podemos acceder a las variables estaticas haciedo referencia a la clase como en php a las que accedemos por ::
    console.log(antam.realName)

    console.log(Avenger.age) // si podemos acceder a la variable estatica pero solamente si se accede directamente desde la clase.

})()