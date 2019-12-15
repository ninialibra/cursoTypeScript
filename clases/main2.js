"use strict";
class Avenger2 {
    constructor(nombre, poder, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        this._poder = poder;
    }
    getNombre() {
        return this.nombre;
    }
    get poder() {
        return this._poder;
    }
    set poder(poder) {
        this._poder = poder;
    }
}
class Xmen extends Avenger2 {
    constructor(nombre, poder, nombreReal) {
        super(nombre, poder, nombreReal);
    }
    getNombre() {
        return super.getNombre();
    }
    getPoder() {
        return super.poder;
    }
    static crearXmen() {
        return new Xmen("Estático", "", "");
    }
}
Xmen.traje = "negro";
let ciclope = new Xmen("Cíclope", "Rayos ojos", "Scott");
console.log(ciclope);
console.log(ciclope.getNombre());
console.log(ciclope.getPoder());
console.log(Xmen.traje);
let xmen_estatico = Xmen.crearXmen();
console.log(xmen_estatico);
let lobezno = new Avenger2("Lobezno", "", "Logan");
console.log(lobezno);
lobezno.poder = "Inmortalidad";
console.log(lobezno.poder);
