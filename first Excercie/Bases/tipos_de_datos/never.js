"use strict";
(() => {
    //never, este es un tipo de dato
    //never no es undefined, no es void, no es null
    //never es never
    //el never indica que la funcion No debe de terminar exitosamente
    const error = (message) => {
        //esta funcion retorna una excepcion, y como la funcion esperaba una excepcion se dice que termino exitosamente
        //pero como no es un exito como tal, se dice que se retorna un Never.
        throw new Error(message);
    };
    let message = 'cuidado';
    error(message);
    // la idea de esto es que la funcion no tenga un punto alcanzzable de terminar exitosasmente
    // como el if, nunca se va a cumplor, y nunca va a terminar mal entonces marca un error por que jamas se alcanzara el never,
    // ya que si se puede terminar exitosamente la funcion.
    const asiPuedeTerminarBien = (message) => {
        //esta funcion retorna una excepcion, y como la funcion esperaba una excepcion se dice que termino exitosamente
        //pero como no es un exito como tal, se dice que se retorna un Never.
        // if(false){
        //     throw new Error(message);   
        // }  
        throw new Error(message);
    };
    let men = 'cuidado';
    asiPuedeTerminarBien(message);
})();
