(()=>{
    //argumentos obligatorios, 
    //recordemos que todo en TS es tipado, por que en una funcion tanto el retorno 
    //como
    //el tipo de datos de los argumentos deben ser colocados,
    //si no los colocamos entonces se defienen como tipo any

    //asi la funcion marca error por que no estamos definiendo el tipo de dato.
    // function fullName(firstName, lastName):string {
    //     return `${firstName} ${lastName}`;
    // }

    function fullName(firstName:string, lastName:(string)):string {
        return `${firstName} ${lastName}`;
    }
    let primerNombre:string = 'Arturo';
    let apellido:string = 'sesma';

    console.log(fullName(primerNombre,apellido));

    //podemos hacer que un argumetno de una funcion sea de un tipo u otro
    function playWithArgs(mayor: string, puedeSer: (number|boolean)):string{
        
        if(typeof(puedeSer) == 'number'){
            return 'es un numero';
        }

        if(typeof(puedeSer) == 'boolean'){
            return 'es un booleano';
        }

        return 'este return jamas debera ser ejecutado ya que la ' 
        + 'funcion solo puede recibir un bool o un numero, pero por' +
        'la estructura del codigo como ambos if pueden virtualmente nunca ser'  +
        'ejecutados piensa que puede no retornar un string la funcion'

    }

    playWithArgs('goal', 1);
    playWithArgs('goal', true);

    //en este marca error por que el primer arg no es string y el segundo no es nu number o boolear
    //playWithArgs(1, '1');

    //Estos son argumentos obligatorios, si no lo colocamos y si los argumentos no se 
    //cumplen como esta definido va a marcar error
    //este marca error por que la funcion espera dos args pero solo estoy enviando uno.
    //fullName('hola');
})()