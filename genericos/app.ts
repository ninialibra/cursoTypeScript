function imprimeConsola(parametro){
    console.log(parametro);    
}

imprimeConsola(123);
imprimeConsola(new Date());
imprimeConsola({});
imprimeConsola({nombre:"Tania"});

function regresar<T>(arg:T){
    return arg;
}

console.log(regresar(15.54564).toFixed(2));
console.log(regresar("NiniaLibra").charAt(0));
console.log(regresar(new Date().getTime()));

function funcionGenerica<T>(arg:T){
    return arg;
}

type Heroe = {
    nombre:string,
    nombreReal:string
};

type Villano = {
    nombre:string,
    poder: string
};

let deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade",
    poder: "Regeneración"
};

console.log(funcionGenerica<Heroe>(deadpool));

class Cuadrado<T extends number|string> {
    base:T;
    altura:T;
    area():number{
        return +this.base * +this.altura;
    }
}

let cuadrado = new Cuadrado();

cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());




