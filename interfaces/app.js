"use strict";
function enviarMision(xmen) {
    console.log("Enviando a " + xmen.nombre);
    xmen.regenerar("Logan");
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel " + xmen.nombre);
}
let wolverine = {
    nombre: "Lobezno",
    poder: "Regeneración",
    regenerar(x) {
        console.log("Se ha regenerado " + x);
    }
};
enviarMision(wolverine);
enviarCuartel(wolverine);
class MutantesX {
    constructor() {
        this.nombre = "";
        this.poder = "";
    }
    regenerar(nombre) {
        console.log("Hola " + nombre);
    }
}
let masacre = new MutantesX();
let sumar2;
sumar2 = function (a, b) {
    return a + b;
};
let restar;
restar = function (a, b) {
    return a - b;
};
