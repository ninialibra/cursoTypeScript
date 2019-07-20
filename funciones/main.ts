//funciones
let heroe2:string = "Flash";

function imprime_heroe():string{
    return heroe2;
}

let activar_batisenal = function():string{
    return "Batiseñal activada";
}

console.log(imprime_heroe());
console.log(activar_batisenal());

//parametros obligatorios
function nombreCompleto(nombre:string, apellido:string):string{

    return nombre+' '+apellido;
}

let nombre = nombreCompleto("peter","parker");
console.log(nombre); 

//parametros opcionales
function nombrePersona(nombre:string, apellido?:string):string{

    if(apellido){
        return nombre+' '+apellido;
    }else{
        return nombre;
    }    
}

let nombre_persona = nombrePersona("Bradd");
console.log(nombre_persona);

//parametros por defecto
function nombreCompletoControlCap(nombre:string, apellido:string, capitalizado:boolean = false):string{

    if(capitalizado){
        return capitalizar(nombre)+' '+capitalizar(apellido);
    }else{
        return nombre+' '+apellido;
    }    
}

function capitalizar(palabra:string):string{

    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

let nombre_capi = nombreCompletoControlCap("tony","stark");
console.log(nombre_capi); 

//parametros rest
function nombreMascota(nombre:string, ...restoParametros:string[]):string{

    return nombre+' '+restoParametros.join(" ");
}

let simba = nombreMascota("Simba","Gato","Pelirrojo");
console.log(simba);

//tipo funcion
function sumar(a:number, b:number):number{
    return a+b;
}

function saludar(nombre:string):string{
    return "Soy "+nombre;
}

function salvarMundo():void{
    console.log("Mundo salvado");
    
}

//let miFuncion:(x:number, y:number)=>number;
//let miFuncion:(x:string)=>string;
//let miFuncion:()=>void;
let miFuncion;
miFuncion = 10;

miFuncion = sumar;
console.log(miFuncion(5,2));

miFuncion = saludar;
console.log(miFuncion("Tania"));

miFuncion = salvarMundo;
miFuncion();