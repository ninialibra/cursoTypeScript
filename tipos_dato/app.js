"use strict";
let batman = "Bruce";
let superman = "Clark";
let existe = false;
let parejaHeroes = [batman, superman];
let villano = ["Lex Lutor", 5, true];
let aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["aquaman"] = 0] = "aquaman";
    Fuerza[Fuerza["batman"] = 1] = "batman";
    Fuerza[Fuerza["flash"] = 5] = "flash";
    Fuerza[Fuerza["superman"] = 100] = "superman";
})(Fuerza || (Fuerza = {}));
let fuerzaFlash = Fuerza.flash;
let fuerzaSuperman = Fuerza.superman;
let fuerzaBatman = Fuerza.batman;
let fuerzaAcuaman = Fuerza.aquaman;
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
let poder = 100;
let largoDelPoder = poder.toString().length;
console.log(largoDelPoder);
