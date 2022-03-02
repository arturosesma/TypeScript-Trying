"use strict";
(() => {
    const hero = 'flash';
    //funcion convensional
    function returnName() {
        return hero;
    }
    let nombre = returnName();
    //esta funcion flecha nos ahorramos crear la funcion y mandarla a llamar
    //directamente la ejecutamos y el retorno la guradamos 
    //dentro de la variable.
    //funcion flecha, la variable activateBatisignal 
    //es un valor de tipo funcion, no de tipo string.
    const activateBatisignal = () => {
        return 'batisigna activate';
    };
    console.log(typeof activateBatisignal); //function
    //forma de especificar el tipo de dato que retorna la funcion flecha.
    const activateBatisignal2 = () => {
        return 'batisigna activate';
    };
    console.log(typeof activateBatisignal2); //string
    //it's very important put what kind of data return
    //my funciton because if tomorrow any coder use my function
    //can know what does function return.
})();
