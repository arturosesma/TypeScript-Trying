(()=>{
    const batman:string = 'Batman';
    const linternaVerde:string = 'Linterna Verde';
    const superWoman:string = 'Super woman';
    const superCcat:string = 'super Gato';
    
    // si usamos comillas simples, y queremos usar una comilla dentro del 
    //string necesitamos usar backslach

    let backslash: string = 'hola\'s';

    //si usamos comillas dobles, y queremos usar una comilla dentro, 
    //entonces podemos escribir normal, pero es mejor usan simples por que 
    //hace mas ligero al codigo.
    let doubleQuotes: string = "hola's";

    //back ticks
    let backTiksOrbackQuotes: string = `otro string`;


    //si definimos nuestros tipos de datos, tenemos acceso a los 
    //metodos propios de los datoss.
    //el intelicense nos permite este tipo de cosas en VSC.
    console.log(backTiksOrbackQuotes.indexOf) 


    //accediendo a una letra en especifico
    // el ? dice, si es nullo, aqui me corto y no hago nada, 
    //si tiene valor sigo.
    console.log(superCcat[10]?.toUpperCase())
})()