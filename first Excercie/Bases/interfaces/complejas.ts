(()=>{
    //estructuras complejas

    const client = {
        name: 'Arturo',
        age: 25,
    }

    //creamos una interface que nos ayude a controlar un  objeto
    interface Client {
        name: string,
        age: number
        address?: Address,
        //las interfaces tambien pueden tener meteodos como los tipoes.
        //la interface no tiene logica solo dice que debe tener

        //si vamos a implementar metodos lo ideal es tener una clase de un objeto.
        getFullAddress?(id: string):void,
    } 

    const customer: Client = {
        //si no definimos el objeto con todos sus atributos marcara un error
        //recordemos si queremos algo opcional hacemos ?
        name: 'Nombre',
        age: 24,
        getFullAddress(id:string){
            return this.address?.city;
        }
    }


    //que pasa si el objeto se comporta de manera mas complicada
    //en este caso agrego datos especificos a este objeto de tipo customer
    //pero los nuevos parametros address que estoy agregando
    //no estan definidos dentro de la interface, como le hago para que
    //se agreguen estos nuevos parametros a la variable de tipo Customer.

    const customer2: Client = {
        name: 'Nombre',
        age: 24,

        //esto arca un error
        // address: {
        //     id: 123,
        //     zip: "code",
        //     city: "ciudad".
        // }
    }

    //puedo definir el tipo de dato y se lo agergoi es decir como si anidara tipos
    // de datos
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const customer3: Client = {
        name: 'Nombre',
        age: 24,

        //esto  ya no marca un error poor que ya esta ddefinida la sub interface 
        address: {
            id: 123,
            zip: "code",
            city: "ciudad",
        }
    }

    // en lsa interfaces usualmente la principal va arriba y las secundarias van a
    // abajo en el orden del codigo.
    //las interfaces no se transpilan a JS.

    //100000 de interfaces = 0 lineas de JS.

    //las interfaces No sirven para crear instancias.
})()