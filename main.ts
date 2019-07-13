//booleanos
let esSuperman:boolean = true;
let esBatman:boolean;
let esAquaman:boolean = true;

if(esSuperman){
    console.log("Estamos salvados");    
}else{
    console.log("Ooooopss!! No!");    
}

esSuperman = convertirClark();

function convertirClark(){
    return false;
}

//numeros
let avengers:number = 5;
let villanos:number;
let otros:number = 2;

if(avengers>villanos){
    console.log("Estamos salvados");    
}else{
    console.log("Estamos perdidos");    
}

//strings
let batman:string = "Batman";
let linternaVerde:string = 'Linterna Verde';
let viudaNegra:string = `Viuda negra`;

console.log(batman);
console.log(linternaVerde);
console.log(viudaNegra);

let concatenar:string = `Los héroes son: ${batman}, ${linternaVerde}, ${viudaNegra}`;

console.log(concatenar);

//any
let vengador:any;
let existe;
let derrotas;

vengador = "Dr. Strange";
console.log(vengador.charAt(0));

vengador = 150.458;
console.log(vengador.toFixed(2));

//arrays
let arreglo:number[] = [1,2,3,5,10,20];
let aVillanos:string[] = ["Duende verde", "Thanos", "Venom"];

//tuplas







