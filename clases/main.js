"use strict";
class Avenger {
    constructor(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    bio() {
        let mensaje = `${this.nombre}, ${this.nombreReal}, ${this.equipo}`;
        console.log(mensaje);
    }
    cambia_equipo_publico(nuevo_equipo) {
        return this.cambiarEquipo(nuevo_equipo);
    }
    cambiarEquipo(nuevo_equipo) {
        if (nuevo_equipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    }
}
let antman = new Avenger("Antman", "Capi", "Scott Lang");
antman.bio();
console.log(antman.cambia_equipo_publico("Capi"));
