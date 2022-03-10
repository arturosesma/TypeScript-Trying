(()=>{

    //herencia

    class Avenger {
        constructor(
            public name:string,
            public realName:string,
        ){
            console.log('constructor siendo mandado a llamar')
        }

        private getFullName():string{
            return `${this.name} ${this.realName}` ;
        }
    }


    //ahora Xmen dispone de Avenger + lo que le hagamos 
    //si mi clase que heredo no tiene un metodo constructor mandara a llamar al metodo constructor de su clase padre,
    //pero si si tiene un metodo consutrctor entonces tenemos que usar super.
    //class Xmen extends Avenger {}

    class Xmen extends Avenger {
        super()
        constructor(
            
        ){}
    }

    //por defecto me pedira las intancias de la clase de la que hereda mas las cosas
    //que tiene Xmen por defecto
    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine.realName)
})()