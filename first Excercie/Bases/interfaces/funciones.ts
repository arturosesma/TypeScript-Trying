(()=>{
    //aplicando interfaces a funciones,
    //es muy poco probable que se usen es poco comun usarlas pero 
    //aqui se explican.

    //definimos la interface
    //decimos que la funcion sea de ripo como la interface
    //ejecutamos la interace
    //rara vez se puede utilizar
    interface addTwoNumbers {
        (a: number, b:number): number;
    } 


    let addNumbersFunction : addTwoNumbers;

    addNumbersFunction = (a:number, b:number) => {
        return 15;
    }
})()