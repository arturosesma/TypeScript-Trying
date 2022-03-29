"use strict";
(() => {
    //como se relacionnan las clases con una interfacecs.
    //no podemos extender de un interface, pero si podemos implementarla
    //class Mutant extends Xmen{}
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
