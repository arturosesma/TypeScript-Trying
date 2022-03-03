(()=>{
    //asi indicamos que la variable es de tipo objeto tipo JSON
    let objeto : { } = {
        name: "Arturo",
        age: 24,
        powers: ['poder 1', 'poder 2']
    }

    //definiendo que es objeto y el tipo de priedades que va a tener
    //en este punto marca error por que age y powers no estan definidos
    let objeto2 : { name:string } = {
        name: "Arturo",
        // age: 24,
        // powers: ['poder 1', 'poder 2']
    }

    //aqui definimos pero decimos que age es de tipo string, marca
    //error por que le estamos dando un number
    // let objeto3 : { name:string, age:string, powers: string[] } = {
    //     name: "Arturo",
    //     age: 24,
    //     powers: ['poder 1', 'poder 2']
    // }

    //aqui ya esta definido aqui no marca error todo en orden y no marca error

    let objeto4 : { name:string, age:number, powers: string[] } = {
        name: "Arturo",
        age: 24,
        powers: ['poder 1', 'poder 2']
    }


    //propiedades opcionales denttro de un Objeto tipo JSON, marca error por que no esta definida age
    //asi marca error por que age no esta definida
    // let flash: {name:string, age:number, powers: string[]} = {
    //     name: 'otro name',
    //     //age:32,
    //     powers:['strings', '']
    // }

    //asi ya no marca error la funcion de arriba por que estamos indicando que es opcional
    let flash: {name:string, age?:number, powers: string[]} = {
        name: 'otro name',
        //age:32,
        powers:['strings', '']
    }

    flash = {
        name: 'otro name',
        age:32,
        powers:['strings', '']
        //aqui este marca error por que aun no emos agregado un metodo
        // como propiedad de un objeto.
        // getNombre(){
        //     return this.name;
        // }
    }
})()