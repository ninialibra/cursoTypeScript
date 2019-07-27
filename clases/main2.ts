class Avenger2{

    private _poder:string;

    constructor(public nombre:string, poder:string, private nombreReal:string){

        this._poder = poder;
    }

    protected getNombre():string{
        return this.nombre;
    }

    get poder():string{
        return this._poder;
    }

    set poder(poder:string){
        this._poder = poder;
    }

} 

class Xmen extends Avenger2{

    static traje:string = "negro";

    constructor(nombre:string, poder:string, nombreReal:string){
        super(nombre, poder, nombreReal);
    }

    public getNombre():string{
        return super.getNombre();
    }

    public getPoder():string{
        return super.poder;
    }

    static crearXmen(){
        return new Xmen("Estático", "", "");
    }

}

let ciclope:Xmen = new Xmen("Cíclope", "Rayos ojos", "Scott");
console.log(ciclope);
console.log(ciclope.getNombre());
console.log(ciclope.getPoder());
console.log(Xmen.traje);

let xmen_estatico = Xmen.crearXmen();
console.log(xmen_estatico);

let lobezno:Avenger2 = new Avenger2("Lobezno", "", "Logan");
console.log(lobezno);
lobezno.poder = "Inmortalidad";
console.log(lobezno.poder);

