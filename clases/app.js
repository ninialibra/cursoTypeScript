class Avenger {

    constructor(nombre, poder){
        this.nombre = nombre;
        this.poder = poder;
    }

}

class AvengerVolador extends Avenger{

    constructor(nombre, poder){
        
        super(nombre, poder);
        this.vuela = true;
    }
}

let thor = new Avenger("Thor", "Dios del trueno");
let falcon = new AvengerVolador("Falcon", "Traje de alas");

console.log(thor);
console.log(falcon);
