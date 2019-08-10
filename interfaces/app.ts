interface Mutante{
    nombre:string,
    poder?:string,
    regenerar(nombreReal:string):void
}

function enviarMision(xmen:Mutante){
    console.log("Enviando a "+xmen.nombre);   
    
    xmen.regenerar("Logan");
}

function enviarCuartel(xmen:Mutante){
    console.log("Enviando al cuartel "+xmen.nombre);
}

let wolverine:Mutante = {
    nombre: "Lobezno",
    poder: "Regeneración",
    regenerar(x:string){
        console.log("Se ha regenerado "+x);        
    }
};

enviarMision(wolverine);
enviarCuartel(wolverine);

class MutantesX implements Mutante{

    nombre:string="";
    poder:string="";
    regenerar(nombre:string){
        console.log("Hola "+nombre);        
    }
}

let masacre = new MutantesX();

interface DosNumerosFunc{
    (num1:number,num2:number):number
}

let sumar2:DosNumerosFunc;

sumar2 = function(a:number,b:number){
    return a+b;
}

let restar:DosNumerosFunc;

restar = function(a:number,b:number){
    return a-b;
}