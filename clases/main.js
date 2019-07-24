var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.bio = function () {
        var mensaje = this.nombre + ", " + this.nombreReal + ", " + this.equipo;
        console.log(mensaje);
    };
    Avenger.prototype.cambia_equipo_publico = function (nuevo_equipo) {
        return this.cambiarEquipo(nuevo_equipo);
    };
    Avenger.prototype.cambiarEquipo = function (nuevo_equipo) {
        if (nuevo_equipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Avenger;
}());
var antman = new Avenger("Antman", "Capi", "Scott Lang");
//antman.nombre = "Otro nombre";
antman.bio();
console.log(antman.cambia_equipo_publico("Capi"));
