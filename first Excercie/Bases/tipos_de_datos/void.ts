(()=>{
    // tipo de dato void
    //void es vacio

    function callBatman(){}

    //dice que a es de tipo de dato void, es decir que no hay nada
    //una funcion que no retorne nada va a regresar undefined.
    const a = callBatman();


    //void indica qu ela funcion no reteorna nada


    //despues del parentesis puedes poner el tipo de dato que va a retornar
    //la funcion, puede ser int, sttring etc...
    function callBatman2():void
    {
        //return 1; //esto marca error por que se supone que
        // la funcion retorna un void y estamos retornando algo

        return; //asi es como indicamos de manera mas explicita que
        //vamos a retornar un void.

        //void != null != undefined.
    }


    //si no retorna un string va a marcar error.
    function retornaString():string 
    {
        return 'hola';
    }

    //poner el tipo de dato que retorna una funcion es buena practica.


    

})()