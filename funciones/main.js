"use strict";
let heroe2 = "Flash";
function imprime_heroe() {
    return heroe2;
}
let activar_batisenal = function () {
    return "Batiseñal activada";
};
console.log(imprime_heroe());
console.log(activar_batisenal());
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
let nombre = nombreCompleto("peter", "parker");
console.log(nombre);
function nombrePersona(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
let nombre_persona = nombrePersona("Bradd");
console.log(nombre_persona);
function nombreCompletoControlCap(nombre, apellido, capitalizado = false) {
    if (capitalizado) {
        return capitalizar(nombre) + ' ' + capitalizar(apellido);
    }
    else {
        return nombre + ' ' + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
let nombre_capi = nombreCompletoControlCap("tony", "stark");
console.log(nombre_capi);
function nombreMascota(nombre, ...restoParametros) {
    return nombre + ' ' + restoParametros.join(" ");
}
let simba = nombreMascota("Simba", "Gato", "Pelirrojo");
console.log(simba);
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "Soy " + nombre;
}
function salvarMundo() {
    console.log("Mundo salvado");
}
let miFuncion;
miFuncion = 10;
miFuncion = sumar;
console.log(miFuncion(5, 2));
miFuncion = saludar;
console.log(miFuncion("Tania"));
miFuncion = salvarMundo;
miFuncion();
