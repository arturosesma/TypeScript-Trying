(()=>{
    
    const hero: string = 'flash';


    //funcion convensional
    function returnName():string {
        return hero;
    }

    let nombre:string = returnName();

    //esta funcion flecha nos ahorramos crear la funcion y mandarla a llamar
    //directamente la ejecturamos y el retorno la guradamos 
    //dentro de la variable.
    //funcion flecha, la variable activateBatisignal 
    //es un valor de tipo funcion, no de tipo string.
    const activateBatisignal = () => {
        return 'batisigna activate';
    }

    console.log(typeof activateBatisignal); //function


    //forma de especificar el tipo de dato que retorna la funcion flecha.
    const activateBatisignal2 = ():string => {
        return 'batisigna activate';
    }

    console.log(typeof activateBatisignal2); //string

    //it's very important put what kind of data return
    //my funciton because if tomorrow any coder use my function
    //can know what does function return.



})()