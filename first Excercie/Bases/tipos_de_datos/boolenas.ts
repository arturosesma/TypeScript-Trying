(()=>{
    //los booleanos pueden ser unicamente true o false,
    //pero dependiendo de la configuracion del tsConfig, podemos tener undefined o null

    let isSuperman:boolean = true;
    console.log(isSuperman);

    let isBatman:boolean = false;
    console.log(isBatman);

    //operador ternario
    //valor = condicion ? estrue : esFalse;
    let Ternario: string = '';
    Ternario = isBatman ? 'si es Bantam ' : 'no es Batman';
    console.log(Ternario);
    
    //la actual configuracion no soporta estos como booleanos si no como otros tipos de datos.
    let isSuperWoman = null;
    console.log(isSuperWoman);

    let isYo = undefined;
    console.log(isYo);
})