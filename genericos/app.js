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
