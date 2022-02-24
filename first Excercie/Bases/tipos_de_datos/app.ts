(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    //no existe una obligacion en ponerlos ordenados,
    //pero es una buena practica.
    enum SuperHeores {
      fuerzaAcuaman = 0,
      fuerzaBatman = 1,
      fuerzaFlash = 5,
      fuerzaSuperman = 100,
    }
  
    const fuerzaAcuaman = 0;
    const fuerzaBatman = 1;
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;


    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (<number>poder.length);
    console.log( largoDelPoder );
  
  
  })()
  
  