//(()=>{})()  --> a esto se le llama funcion anonima auto invocada.


(()=>{
    //null y undefined

    let nada:undefined = undefined;

    //undefined no puede ser asignado a otro tipo de dato, 
    //undefined es undefined y punto.
    //aqui vemos un error
    //let nada2:number = undefined;

    //asi le decimos que podria ser de cualquiera de los dos
    let nada3:(number|undefined) = undefined;


    //si queremos que una variable tambien acepte undefined sin tener que 
    //hacer la declaracion del metodo anterior podemos hacer lo siguiente

    //strictNullChesk y lo ponemos como false en el tsconfig
    //solo si lo necesitamos vamos a este metodo, pero es mejor 
    //seguir con el tipado.

    //TS entre mas estrictos seamos con el tipado mejor.


    // en teoria, true, false, undefined y null son booleanos, pero si 
    ///nos ponemos estrictos solo true y false lo son
    // undefined es undefined 
    // null es null
    // undefined !== null => true
})()