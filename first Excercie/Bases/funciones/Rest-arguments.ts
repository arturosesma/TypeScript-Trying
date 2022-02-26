(()=>{


    //que pasa si mi funcion tiene 5 argumentos, 
    //pero solamente 1 es obligatorio, la primera
    //pero las demas no, las demas no son obligatorias y no estan siendo enviadas
    //a esto se le conoce como REST-Arguments.
    //una funcion puede recibir rantos arg como quiesa,

    //...restArgs
    //por defecto es un array de any, y puede que no sepamos cuandos argumenos va a recibir esta funcion
    
    const fullName = (firstName:String, ...restArg:string[]) :string => {
        //todos los argumentos que esten despues de donde se definio ...restArgs
        //van a ser un array del tipo que se definan, recordemos que por defecto es un array de any.
        //este array sera recorrdioy usado el valor final de donde se mande a llamar

        return `${ firstName} ${restArg.join(' ')}`;

    }

    console.log(fullName('arg 1', 'arg 2', 'arg 3', 'arg 4', 'arg 5', 'arg 6' ));

    //Regla de oro si se puede hacer en JS se puede hacer en TS, pero no alreves



})()