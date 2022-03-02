"use strict";
(() => {
    // tipo de dato void
    //void es vacio
    function callBatman() { }
    //dice que a es de tipo de dato void, es decir que no hay nada
    //una funcion que no retorne nada va a regresar undefined.
    const a = callBatman();
    //void indica que la funcion no retorna nada
    //despues del paréntesis puedes poner el tipo de dato que va a retornar
    //la función, puede ser int, string etc...
    function callBatman2() {
        //return 1; //esto marca error por que se supone que
        // la funcion retorna un void y estamos retornando algo
        return; //asi es como indicamos de manera mas explicita que
        //vamos a retornar un void.
        //void != null != undefined.
    }
    //si no retorna un string va a marcar error.
    function retornaString() {
        return 'hola';
    }
    //poner el tipo de dato que retorna una funcion es buena practica.
})();
