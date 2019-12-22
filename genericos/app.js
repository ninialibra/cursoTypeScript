"use strict";
function imprimeConsola(parametro) {
    console.log(parametro);
}
imprimeConsola(123);
imprimeConsola(new Date());
imprimeConsola({});
imprimeConsola({ nombre: "Tania" });
function regresar(arg) {
    return arg;
}
console.log(regresar(15.54564).toFixed(2));
console.log(regresar("NiniaLibra").charAt(0));
console.log(regresar(new Date().getTime()));
function funcionGenerica(arg) {
    return arg;
}
let deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade",
    poder: "Regeneración"
};
console.log(funcionGenerica(deadpool));
class Cuadrado {
    area() {
        return +this.base * +this.altura;
    }
}
let cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());
