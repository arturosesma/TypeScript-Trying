(() => {
    //antes js no soportaba clases, pero en el ES6 si se soportan las clases

    class Avengers {
        name;
        poder;

        constructor(name, poder){
            this.name = name;
            this.poder = poder;
        }
    }

    let name = 'Hulk'
    let poder = 34;
    const hulk = new Avengers(name, poder);
    console.log(hulk);


    class FlyingAvenger extends Avengers {
        flying;

        
        constructor(name, poder, flying){
            super(name, poder) //este super mandamos a llamar al metodo constructor 
            //del objeto padre
            this.flying = flying
        }
    }

    const flying = new FlyingAvenger(name, poder, true);
})()