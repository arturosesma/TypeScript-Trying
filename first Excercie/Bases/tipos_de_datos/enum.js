"use strict";
(() => {
    //los enums nos permiten tener un rango de valores seleccionables
    //por ejemplo un nivel de audio donde 1,5 y 10 son valores permitidos
    //pero 2,3,4,6,7,8,9 no
    //palabra reservada enum y CamelCase con llaves
    //por defecto los niveles que defina dentro del enum tendran valores de 
    //0, 1 y 2 etc... como si el valor fuera el indice de un array
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.medium;
    console.log(currentAudio); //vamos a ver 1, ya que tiene el valor de medium que por defecto es 1.
    //asi le doy yo los vales que quiera darle
    let OtroEnum;
    (function (OtroEnum) {
        OtroEnum[OtroEnum["uno"] = 10] = "uno";
        OtroEnum[OtroEnum["dos"] = 11] = "dos";
        OtroEnum[OtroEnum["tres"] = 25] = "tres";
    })(OtroEnum || (OtroEnum = {}));
    //las enumeraciones son formas de manejar numeros, por defecto almacena numeros
    //dos tiene po defecto el valor de 1, aunque no tiene un valor asignado.
    //tendra el valor que por defecto tiene su indice.
    let OtroEnum2;
    (function (OtroEnum2) {
        OtroEnum2[OtroEnum2["uno"] = 10] = "uno";
        OtroEnum2[OtroEnum2["dos"] = 11] = "dos";
        OtroEnum2[OtroEnum2["tres"] = 25] = "tres";
    })(OtroEnum2 || (OtroEnum2 = {}));
})();
