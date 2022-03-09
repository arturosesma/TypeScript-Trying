(()=>{
    //desetructuring o desestructuracion de objetos

    const avengers = {
        nick: 'Samuel L. jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Berrany',
        Activo: true,
        poder: 1500
    }

    //tenemos un objeto y podemos extraer las propiedades que queramos.

    //esto 
    const { poder, vision } = avengers;
    //es equivalente a esto, 
    let Poder = avengers.poder.toFixed();
    let Vsion = avengers.vision.toLowerCase();
    //pero con el EC6 podemos ahorrarnos codigo y hacelo como se ve arriba.

    //ahora tengo dos variables con el valor de la propiedad del objeto

    //puedo acceder a los objetos que extrage del objeto y aplicarle
    //metodos propios al tipo de dato.
    console.log(poder.toFixed, vision.toUpperCase);

    type Avengers = {
        nick: string
        ironman: string
        vision: string
        Activo: boolean,
        poder: number
    }

    const printAvenger = (avengers:Avengers) => {
        console.log(avengers.vision)
    }

    //usando desectructuracion para imprimir
    const printAvengerOtherForm = ({ironman, ...resto}:Avengers) => {
        console.log(ironman, resto, resto.nick) //sabe que ya no tengo a ironman, 
        //esto es el operador rest. aplicado a un objeto
    }

    //basicamente la desestructuracoin es una forma de extraer una propiedad de un objeto.
})()