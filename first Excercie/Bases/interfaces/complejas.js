"use strict";
(() => {
    //estructuras complejas
    const client = {
        name: 'Arturo',
        age: 25,
    };
    const customer = {
        //si no definimos el objeto con todos sus atributos marcara un error
        //recordemos si queremos algo opcional hacemos ?
        name: 'Nombre',
        age: 24,
        getFullAddress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        }
    };
    //que pasa si el objeto se comporta de manera mas complicada
    //en este caso agrego datos especificos a este objeto de tipo customer
    //pero los nuevos parametros address que estoy agregando
    //no estan definidos dentro de la interface, como le hago para que
    //se agreguen estos nuevos parametros a la variable de tipo Customer.
    const customer2 = {
        name: 'Nombre',
        age: 24,
        //esto arca un error
        // address: {
        //     id: 123,
        //     zip: "code",
        //     city: "ciudad".
        // }
    };
    const customer3 = {
        name: 'Nombre',
        age: 24,
        //esto  ya no marca un error poor que ya esta ddefinida la sub interface 
        address: {
            id: 123,
            zip: "code",
            city: "ciudad",
        }
    };
    // en lsa interfaces usualmente la principal va arriba y las secundarias van a
    // abajo en el orden del codigo.
    //las interfaces no se transpilan a JS.
    //100000 de interfaces = 0 lineas de JS.
    //las interfaces No sirven para crear instancias.
})();
