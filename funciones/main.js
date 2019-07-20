//funciones
var heroe2 = "Flash";
function imprime_heroe() {
    return heroe2;
}
var activar_batisenal = function () {
    return "Batiseñal activada";
};
console.log(imprime_heroe());
console.log(activar_batisenal());
//parametros obligatorios
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
var nombre = nombreCompleto("peter", "parker");
console.log(nombre);
//parametros opcionales
function nombrePersona(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var nombre_persona = nombrePersona("Bradd");
console.log(nombre_persona);
//parametros por defecto
function nombreCompletoControlCap(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
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
var nombre_capi = nombreCompletoControlCap("tony", "stark");
console.log(nombre_capi);
//parametros rest
function nombreMascota(nombre) {
    var restoParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restoParametros[_i - 1] = arguments[_i];
    }
    return nombre + ' ' + restoParametros.join(" ");
}
var simba = nombreMascota("Simba", "Gato", "Pelirrojo");
console.log(simba);
//tipo funcion
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "Soy " + nombre;
}
function salvarMundo() {
    console.log("Mundo salvado");
}
//let miFuncion:(x:number, y:number)=>number;
//let miFuncion:(x:string)=>string;
//let miFuncion:()=>void;
var miFuncion;
miFuncion = 10;
miFuncion = sumar;
console.log(miFuncion(5, 2));
miFuncion = saludar;
console.log(miFuncion("Tania"));
miFuncion = salvarMundo;
miFuncion();
