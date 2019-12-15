"use strict";
class Mutantes {
    constructor(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
}
class Xmen2 extends Mutantes {
}
let tormenta = new Xmen2("Tormenta", "No me acuerdo");
console.log(tormenta);
class Fenix {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static llamarFenix() {
        if (!Fenix.instancia) {
            Fenix.instancia = new Fenix("Soy el Fénix");
        }
        return Fenix.instancia;
    }
}
let fenix_real = Fenix.llamarFenix();
console.log(fenix_real);
