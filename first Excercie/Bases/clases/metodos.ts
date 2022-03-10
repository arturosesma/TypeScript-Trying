(()=>{

    //metodos tambien hay privados, publicos y estaticos
    class Avenger {

        static age?: number = 35; 

        //static quiere decir que puedo acceder al metodo con la clase sin necesidad de hacer una instancia a la clase.
        static getAvgAge(){
            return this.name  //este name no es el metodo name, por que no esta definido, es el nombre de la clase perse, es decir un metodo de la clase por si mismo y no el atributo name al que estamos accediendo
            //recordemoms que los metodos estaticos son propios de la clase y no podemos acceder a ellos bajo instancias si no haciendo referencias a la clase en si mismas
            //esto quiere decir que asi es como podemos acceder a propiedades perse de la clase. como en php los modelos el find etc...
        }

        constructor(
            public name:string, 
            public team:string,  
            private realName:string, 
            private age?:number
            ){
            this.age 
         }

        public bio():string {   // no es necesario poner public ya que por si solo se infiere a que es publica.
            return `${this.name} ${this.team}` 
         }

    }

  const antam: Avenger = new Avenger('Nombre', 'Equipo', 'Realname', 5);
    

  //el intelicence si es cubico es un metodo si es rectangular es una propiedad

  //solo puedo accder a la propiedad si es publica,
    console.log(antam.bio())

    //solo puedo acceder a este metodo haciendo instancia a la clase.
    console.log(Avenger.getAvgAge) 

})()