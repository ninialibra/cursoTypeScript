"use strict";
function sumar(a, b) {
    return a + b;
}
let contar = function (heroes) {
    return heroes.length;
};
let superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
function llamarBatman(llamar = true) {
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
llamarBatman();
function unirheroes(...personas) {
    return personas.join(", ");
}
function noHaceNada(numero, texto, booleano, arreglo) {
}
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
