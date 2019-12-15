"use strict";
let esSuperman = true;
let esBatman;
let esAquaman = true;
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Ooooopss!! No!");
}
esSuperman = convertirClark();
function convertirClark() {
    return false;
}
let avengers = 5;
let villanos;
let otros = 2;
if (avengers > villanos) {
    console.log("Estamos salvados");
}
else {
    console.log("Estamos perdidos");
}
let batman = "Batman";
let linternaVerde = 'Linterna Verde';
let viudaNegra = `Viuda negra`;
console.log(batman);
console.log(linternaVerde);
console.log(viudaNegra);
let concatenar = `Los héroes son: ${batman}, ${linternaVerde}, ${viudaNegra}`;
console.log(concatenar);
let vengador;
let existe;
let derrotas;
vengador = "Dr. Strange";
console.log(vengador.charAt(0));
vengador = 150.458;
console.log(vengador.toFixed(2));
let arreglo = [1, 2, 3, 5, 10, 20];
let aVillanos = ["Duende verde", "Thanos", "Venom"];
let heroe = ["Dr. Strange", 100, true];
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
let audio = Volumen.medio;
console.log(audio);
console.log(Volumen[5]);
function llamar_batman() {
    console.log("Mostrar la batseñal");
}
let mensaje = llamar_batman();
function error(mensaje) {
    throw new Error(mensaje);
}
let cualquier_valor = "Cualquier cosa";
let largo = cualquier_valor.length;
console.log(largo);
let ironman;
ironman = "Tony";
