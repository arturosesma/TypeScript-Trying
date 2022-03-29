(()=>{
    //como se relacionnan las clases con una interfacecs.

    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string; 
    }
    
    interface Human {
        age: number;
    }

    //no podemos extender de un interface, pero si podemos implementarla
    //class Mutant extends Xmen{}

    class Mutant implements Xmen, Human{

        mutantPower(id:number){
            return this.name + ' ' + this.realName;
        }

        constructor(
            public age: number,
            public name: string,
            public realName: string,
        ){
        }
    } 
})()