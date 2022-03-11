(()=>{
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

        //creamos dentro de la clae una instancia del tipo de la clase
        static instance:Apocalipsis;

        private constructor(public name:string){}

        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy un apocalipsis unico');
            }

            return Apocalipsis.instance
        }

        changeName(newNAme:string): void {
            this.name = newNAme;
        }

        //cada que quiero usar una instancia debera ser la misma
        //es el principio singletom, ya no se debe de utilizar ya es muy viejo pero
        //no sabes si en alguna empresa te lo pidan
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
})()