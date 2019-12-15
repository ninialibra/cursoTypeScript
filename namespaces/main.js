"use strict";
if (Validaciones.validarTexto("Barry Allen")) {
    console.log("Texto válido");
}
else {
    console.log("Texto no válido");
}
let hoy = new Date();
console.log(Validaciones.validarFecha(hoy));
