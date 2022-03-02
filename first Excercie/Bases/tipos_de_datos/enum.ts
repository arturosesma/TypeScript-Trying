(()=>{
    //los enums nos permiten tener un rango de valores seleccionables

    //por ejemplo un nivel de audio donde 1,5 y 10 son valores permitidos
    //pero 2,3,4,6,7,8,9 no

    //palabra reservada enum y CamelCase con llaves

    //por defecto los niveles que defina dentro del enum tendran valores de 
    //0, 1 y 2 etc... como si el valor fuera el indice de un array
    enum AudioLevel {
        min,
        medium,
        max,
    }

    const currentAudio = AudioLevel.medium;

    console.log(currentAudio); 
    //vamos a ver 1, ya que tiene el valor de medium que por defecto es 1.

    //asi le doy yo los vales que quiera darle
    enum OtroEnum {
        uno = 10,
        dos = 11,
        tres = 25,
    }

    //las enumeraciones son formas de manejar numeros, por defecto almacena numeros

    //dos tiene po defecto el valor de 1, aunque no tiene un valor asignado.
    //tendra el valor que por defecto tiene su indice.
    enum OtroEnum2 {
        uno = 10,
        dos,
        tres = 25,
    }
})()