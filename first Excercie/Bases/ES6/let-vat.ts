(()=>{

    //var ya no debemos de usarla usemozla en caso 
    //extremo cuando necesitemos compatibilidad con otros navegadores,
    //pero ya no debemos de usarla por que trae errores raros.


    //console.log(a); //marca error por que no esta definida
    //pero en otros ides al usar var no marcaria error, pero al usar
    //let y cons si marca error si la variable no esta definida.
    var a = 'Arturo'
    console.log(a); //no marca error por que si esta definida
    

    let b = 'arturo';  //esta si puedo editarla a lo largo del flujo
    const c = 'CONSTANTE' //esta no la puedo editar a lo largo del flujo


    b = 'hola';
    //c = 'no me deja editarla por que es const'

    //es decir las constantes no apuntan a un valor en memoria, 
    //esto nos permite no poder editar una variable de tipo const, 


    //el ES6 es lo mejor para trabajar JS hoy en dia, aunque hay empresas con tecnologias
    //viejas que no nos permiten usar esto, por lo que podeos usar ES5, 

    //

    const getNAme = (): void => {
        console.log('viejo getName');
    }

    //getNAme = {} => { console.log('nuevo getName')} // marca error ppor que la
    //variable no puede ser editada.
    getNAme();

})()