
// //decorador de clase normal
// function consola(constructor:Function){
//     console.log(constructor);    
// }

// //decorador de fabrica
// function imprimirConsola(imprimir:boolean):Function{

//     if(imprimir){
//         return consola;
//     }else{
//         return null;
//     }

// }

function planVillano(constructor:Function){

    constructor.prototype.imprimirPlan = function(){
        console.log("El plan de "+this.nombre+" es dominar el mundo.");        
    };
}

//@imprimeConsola(true);
@planVillano
class Villano2{

    constructor(public nombre:string){
        


    }

}

let lex = new Villano2("Lex Lutor");
(<any>lex).imprimirPlan();