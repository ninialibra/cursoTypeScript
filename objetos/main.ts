//tipos personalizados
type Heroe = {

    nombre:string,
    edad:number,
    poderes:string[],
    getNombre:()=>string
}


let flash:Heroe = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Correr","Viajar tiempo"],
    getNombre(){
        return this.nombre;
    }
}; 

let superMan: Heroe = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Puede volar"],
    getNombre(){
        return this.nombre;
    }
};


//multiples tipos permitidos
let loquesea:string | number = "Tania";
loquesea = 10;

//revision tipo de variable
let cosa:any = "adsa";

if(typeof cosa === "number"){
    console.log("Cosa es un número");    
}else{
    console.log("Cosa NO es un número");    
}

//destructuracion de objetos
let avengers2 = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Junior",
    vision: "Paul Bettany",
};

let {nick, ironman:warmachine, vision} = avengers2;

console.log(nick);
//console.log(ironman);
console.log(vision);
console.log(warmachine);

//destructuracion de arrays
let avengers3 = ["avenger1", "avenger2", "avenger3"];
let [avenger1, , avenger3] = avengers3

console.log(avenger1);
//console.log(avenger2);
console.log(avenger3);

let coche1 = {
    marca: "Seat",
    modelo: "León"
};

let coche2 = {
    marca: "Ford",
    modelo: "Focus"
};

let coches = [coche1, coche2];

for (let coche of coches){
    console.log(coche.marca, coche.modelo);    
}


