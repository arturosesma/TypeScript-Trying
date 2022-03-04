(()=>{
    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: string | number | Hero;
    myCustomVariable = 'ahora vale un string';
    //ahora vale un numero
    myCustomVariable = 3;

    //no puede ser un booleano
    //por eso marca error
    //myCustomVariable = true;


    //ahora la variable es de tipo object y no es de tipo heroe como tal
    //es decir en TS, si existe el tipo Heroes
    //pero en JS No existe de tipo Heroe, se traduce de tipo objeto
    myCustomVariable = {
        name: 'name',
        age: 1,
        powers: [''],
        getName(){
            return this.name
        }
    }

})()