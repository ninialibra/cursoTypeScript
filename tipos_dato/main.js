//booleanos
var esSuperman = true;
var esBatman;
var esAquaman = true;
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
//numeros
var avengers = 5;
var villanos;
var otros = 2;
if (avengers > villanos) {
    console.log("Estamos salvados");
}
else {
    console.log("Estamos perdidos");
}
//strings
var batman = "Batman";
var linternaVerde = 'Linterna Verde';
var viudaNegra = "Viuda negra";
console.log(batman);
console.log(linternaVerde);
console.log(viudaNegra);
var concatenar = "Los h\u00E9roes son: " + batman + ", " + linternaVerde + ", " + viudaNegra;
console.log(concatenar);
//any
var vengador;
var existe;
var derrotas;
vengador = "Dr. Strange";
console.log(vengador.charAt(0));
vengador = 150.458;
console.log(vengador.toFixed(2));
//arrays
var arreglo = [1, 2, 3, 5, 10, 20];
var aVillanos = ["Duende verde", "Thanos", "Venom"];
//tuplas
var heroe = ["Dr. Strange", 100, true];
//enumeraciones
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(audio);
console.log(Volumen[5]);
//void-vacio
function llamar_batman() {
    console.log("Mostrar la batseñal");
}
var mensaje = llamar_batman();
//never
function error(mensaje) {
    throw new Error(mensaje);
}
//error("Error crítico");
//aserciones de tipo
var cualquier_valor = "Cualquier cosa";
var largo = cualquier_valor.length;
console.log(largo);
