var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
/// <reference path="validaciones/textos.ts" />
/// <reference path="validaciones/fechas.ts" />
if (Validaciones.validarTexto("Barry Allen")) {
    console.log("Texto válido");
}
else {
    console.log("Texto no válido");
}
var hoy = new Date();
console.log(Validaciones.validarFecha(hoy));
