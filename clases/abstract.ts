abstract class Mutantes{

    constructor(public nombre:string, public nombreReal:string){
        
    }

}

class Xmen2 extends Mutantes{



}

let tormenta = new Xmen2("Tormenta", "No me acuerdo");
console.log(tormenta);


class Fenix{

    static instancia:Fenix;

    private constructor(public nombre:string){

    }

    static llamarFenix(){

        if(!Fenix.instancia){
            Fenix.instancia = new Fenix("Soy el Fénix");
        }

        return Fenix.instancia;
    }
}

//let fenixFalso = new Fenix("Fenix falso");
let fenix_real = Fenix.llamarFenix();
console.log(fenix_real);


