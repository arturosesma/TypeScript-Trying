(()=>{

    class Avenger {

        constructor(
            public name:string,
            public realName:string,
        ){
            console.log('constructor Avenger siendo mandado a llamar')
        }

        protected getFullName():string{
            return `${this.name} ${this.realName}` ;
        }
    }


    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean,
        ){
            super(name, realName)
            console.log('constructor Xmen siendo llamado')
        }

        //definiendo un get
        //por defecto un getter tiene que retornar un valor, 
        //si no retorna nada marca un error
        //los getters parecen una propiedad.
        //un getter es una funcion que jamaaaas 
        //va a recibir un argumento
        //pero siempre tiene que retornar algo que 
        //esta inside of the object.
        get fullNAme(){
            return this.name + this.realName;
        }


        //un set siempre va a recibir unicamente un argumetno y 
        //siempre va a hacer alguna modificacion a los parametors 
        //dentro de una clase que esta definida dentro de la instancia
        //no se pueden poner dos argumentos es solo uno y ya.
        set fullNAme(newName:string){
            this.name = newName
        }

        protected getFullNameDesdeXmen(): string {
            //yo podria poner cierta logica si quiero aqui.
            return super.getFullName();
        }
    }


    const wolverine = new Xmen('nombre', 'nombre Real', true );
    
    //accedemos a un getter como si fuera un propiedad y 
    //retorna lo que le estamos pidiendo
    console.log(wolverine.fullNAme)

    //el seter siemmpre debe recibir algo y afecta a una propiedad 
    //de la clase que esta en la instancia del objeto.
    //el setter recibe el nombre mediante la igualacion, por que no es
    //propiamente un metodo es un setter.
        console.log(wolverine.fullNAme = 'nuevo nombre');

})()
