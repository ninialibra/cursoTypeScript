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

