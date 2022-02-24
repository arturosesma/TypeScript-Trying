"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    //no existe una obligacion en ponerlos ordenados,
    //pero es una buena practica.
    let SuperHeores;
    (function (SuperHeores) {
        SuperHeores[SuperHeores["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        SuperHeores[SuperHeores["fuerzaBatman"] = 1] = "fuerzaBatman";
        SuperHeores[SuperHeores["fuerzaFlash"] = 5] = "fuerzaFlash";
        SuperHeores[SuperHeores["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(SuperHeores || (SuperHeores = {}));
    const fuerzaAcuaman = 0;
    const fuerzaBatman = 1;
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
