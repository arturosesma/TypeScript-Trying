(()=>{
//tupla, trio, quintenta , cuarteta etc...

//tuples en ingles, son arreglos limitados en cantidad de elementos
// es decir una tupla es una variable de tipo array a la que ya no le 
//puedes meter mas 
//valores, y 
//cada item es de un tipo de dato

const hero: [string, number] = ['llave' , 3];

//hero[0] = 50; // marca un error por que numero no es asignable a string


hero[0] = 'string'
hero[1] = 23445;


})()