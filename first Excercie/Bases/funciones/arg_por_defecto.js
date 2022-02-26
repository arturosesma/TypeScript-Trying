"use strict";
(() => {
    //un elemento requerido no puede ir despues de un argumento opcional, por eso aqui upper marca error
    //const fullName = (firstName:string, lastName?:string, upper: boolean) : string => {
    //return `${firstName} ${lastName || 'no last name'}`;
    //}
    //de esta manera vemos dos argumentos que son opcionales, despues de los que son olbiglatorios
    const fullName = (firstName, lastName, upper) => {
        //si la variable no esta definifa entonces toma el valor de las tuberias o pipe.
        return `${firstName} ${lastName || 'no last name'}`;
    };
    const name = fullName('nombre', 'apellido');
    const ejemplo2 = fullName('nombre');
    //Que pasa si quereos que un argumento opcional tenga un valor por defecto, es decir que si no viene
    //tenga un valor pero si si viene entonces tomar el valor del argumento
    const fullName2 = (firstName, lastName, upper = false) => {
        //si la variable no esta definifa entonces toma el valor de las tuberias o pipe.
        if (upper) {
            return (`${firstName} ${lastName || 'no last name'}`).toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no last name'}`;
        }
    };
    //si no envias un booleano por defecto es false
    //si envias un booleano toma el valor
    console.log(fullName2('hola', 'apellido', true));
    //puedes no enviar los opcionales pero si el obligatorio
    console.log(fullName2('hola'));
    //si no pones por lo menos el obligatorio estas frito
    //console.log(fullName2());
    //no puedes enviar el booleano y saltarte el apellido, tienes que enviar todos los opcionales, hasta llegar al que quieres enviar.
    //console.log(fullName2('hola', false));
})();
