function enviarMision(xmen) {
    console.log("Enviando a " + xmen.nombre);
    xmen.regenerar("Logan");
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel " + xmen.nombre);
}
var wolverine = {
    nombre: "Lobezno",
    poder: "Regeneración",
    regenerar: function (x) {
        console.log("se ha regenerado " + x);
    }
};
enviarMision(wolverine);
enviarCuartel(wolverine);
