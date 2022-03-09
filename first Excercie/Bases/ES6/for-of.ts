(()=>{
    //en js existen los ciclos como ya los conocemos como
    //el for, while etc...
    //pero el for of se explica acontinuacin

    type Avengers = {
        nombre:string,
        weapon: string
    }

    const ironamn: Avengers = {
        nombre: 'Ironman',
        weapon: 'Armorsuit'
    }

    const AmericaCapitan: Avengers = {
        nombre: 'America',
        weapon: 'escudo'
    }

    const Thor: Avengers = {
        nombre: 'thor',
        weapon: 'martillo'
    }

    const avengers:Avengers[] = [ironamn, AmericaCapitan, Thor];


    //si queremos recorrer usando esta estrucutra es engorroso, cansado, y 
    //puede haber errores
    //para no usar este tipo de estructuras podemos usar el forof
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    // }


    //elemento del Objeto, sabemos que el elemento u objeto es definido 
    for (const avenger of avengers) {
        console.log(avenger)
        console.log(avenger.nombre)
        console.log(avenger.weapon)
    }   

})()