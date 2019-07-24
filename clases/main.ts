class Avenger{

    public nombre:string;
    protected equipo:string;
    private nombreReal:string;

    private puedePelear:boolean = false;
    private peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){

        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

    bio():void{
        let mensaje:string = `${this.nombre}, ${this.nombreReal}, ${this.equipo}`;
        console.log(mensaje);        
    }

    public cambia_equipo_publico(nuevo_equipo:string):boolean{

        return this.cambiarEquipo(nuevo_equipo);
    }

    private cambiarEquipo(nuevo_equipo:string):boolean{

        if(nuevo_equipo===this.equipo){
            return false;
        }else{
            return true;
        }

    }
}

let antman:Avenger = new Avenger("Antman", "Capi", "Scott Lang");

//antman.nombre = "Otro nombre";
antman.bio();
console.log(antman.cambia_equipo_publico("Capi"));
