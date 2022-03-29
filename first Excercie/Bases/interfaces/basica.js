"use strict";
(() => {
    //La mejor forma de ver una interface es que funciona basicamente igual que un 
    //tipo basicamente funcionan igual
    let flash = {
        name: 'Nombre',
        powers: [1, 2, 3],
        age: 3,
    };
    //differences between Type Aliases and interfaces
    //type aliases and interface are very similar, and in many case you can choose between them freeely
    //Almos all feature of an Interface are available in Type, the key disctintion is that a Type
    //cannot be re-opened to add new propertiess vs an interface wich is always extenddable
    //basicamente un type es un objeto de caracter estatico mientras que una interface 
    //es como un tipo que ademas de tener diferentes sintaxis puedes editar el tipom a lo largo de tu aplicacion conforme lo necesites..
    //un tipo No puede expandirse, pero una interface si, podemos agregarle mas cosas, aunque 
    //una interface No define el comportamiento, una Clase si define el comportamiento del objeto
    //una interface solo define la estructura de atributos de un objeto.
    //las interfaces son usadas para definisiones HTTTP, y typo para objetos que sabemos que no van a extender
    //como las acciones que vamos a implementar como un REDUX.
})();
