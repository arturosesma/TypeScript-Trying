"use strict";
(() => {
    //argumentos opcionales, puede que un argumento vaya a ser enviado pero puede que no.
    //esto se logra al final del argumento poner un ?  esto significa que puede que si venga o que no
    const fullName = (firstName, lastName) => {
        //si la variable no esta definifa entonces toma el valor de las tuberias o pipe.
        return `${firstName} ${lastName || 'no last name'}`;
    };
    //como podemos ver al colocar los argumentos, no marca error ya que estamos especificando en la guncion
    //que dependera de si esta o no definida la variable, es decir puedo no enviarla
    const name = fullName('nombre', 'apellido');
    const ejemplo2 = fullName('nombre');
    //de manera natural en JS, se puede mandar argumentos opcionales, pero por no tener un tipado de datos
    //nos podemos meter en un problema enorme al no tener bien definidos los tipos de datos 
    //y si se puede o no usar la funcion.
})();
