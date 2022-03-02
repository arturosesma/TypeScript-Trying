(()=>{

    //esta funcion flecha se puede resumir ...
    // const addNumber = (a:number, b:number ):number => {
    //     return a+b;
    // }

    //... esto, si es el ECMS6
    //las funciones flechas las declaras y las usas ahi mismo, y el return se almacena en la 
    //variable 
    //donde la setas usando, su el return es al instante entonces 
    //podemos colocar la exprecion despues de la flecha.
    const addNumber = (a:number, b:number ):number => a + b;

    const greet = (name:string ):string => `Hola ${name}`;

    const saveTheWorld = () => `El mundo esta salvado`;
    
    
    let myFunction;

    myFunction = 10;
    console.log(myFunction); //va a imprimir el 10, 
    //En JS todos los objetos pasan por referencia

    //pero si hacemos esteo

    //al hacer esto ahora la funcion addNumber se puede hacer tambien en myfunction
    myFunction = addNumber;
    console.log(myFunction(1,2));

    myFunction = greet;
    //console.log(myFunction(1,2)); //esto marca un error, por uqe ahora hace referencia 
    //a la funcion
    //greet, lo cual espera un string
    console.log(myFunction('1,2'));

    //esta funcion jala bien por que no es necesario meterle un argumento
    myFunction = saveTheWorld;
    console.log(myFunction());


    //Si ahora yo firmo una funcion
    let myFunction2: (x:number, y:number) => number;

    //como las myFucntion2 es del tipo de la funcion addNumber son compatibles, 
    myFunction2 = addNumber;
    console.log(myFunction2(1,2));

    //estas marcaran error por que no son funciones del mismo tipo
    // myFunction2 = greet;
    // console.log(myFunction2('1,2'));

    // myFunction2 = saveTheWorld;
    // console.log(myFunction2());

    //si se puede por que son asignables, son funciones del mismo tipo
    let myFunction3 : (name:string) => string;
    myFunction3 = greet;
    console.log(myFunction3('string'));

    //si se puede por que son funciones del tipo
    let myFunction4 : () => string;
    myFunction4 = saveTheWorld;
    //marca error por que la funcion no espera nada
    //console.log(myFunction4('string'));
    console.log(myFunction4());
})()