(()=>{

    //objeto 1
    let flash: {name:string, age:number, powers : string[], getName?: () => string} = {
        name: 'nombre',
        age: 23,
        powers: ['poder 1', 'poder 2'] 
    }

    //objeto 2
    let superMan: {name:string, age:number, powers : string[], getName?: () =>string} = {
        name: 'nombre 2',
        age: 23,
        powers: ['poder 1', 'poder 2'] 
    }

    //que pasa si los poderes ya no son un string ahora son un arreglo de numeros
    //el problem es que tenemos que hacer una modificacion en todos los lugares
    //donde los usamos para ello son LOS TIPOS PERSONALIZADOS.

    //la palabra reservada es que podemos inventar nuestros propios tipos
    //declaramos el tipo Hero que sea un objeto estandarizado que puede ser mandado a llamar
    //es como el models de Angular.
    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    }

    let nuevoHero: Hero = {
        name: 'Nombre',
        age: 2,
        powers: ['', ''],
        getName(){
            return this.name
        }
    }

})()