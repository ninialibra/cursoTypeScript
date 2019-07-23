var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Correr", "Viajar tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
var superMan = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Puede volar"],
    getNombre: function () {
        return this.nombre;
    }
};
//multiples tipos permitidos
var loquesea = "Tania";
loquesea = 10;
//revision tipo de variable
var cosa = "adsa";
if (typeof cosa === "number") {
    console.log("Cosa es un número");
}
else {
    console.log("Cosa NO es un número");
}
//destructuracion de objetos
var avengers2 = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Junior",
    vision: "Paul Bettany"
};
var nick = avengers2.nick, warmachine = avengers2.ironman, vision = avengers2.vision;
console.log(nick);
//console.log(ironman);
console.log(vision);
console.log(warmachine);
//destructuracion de arrays
var avengers3 = ["avenger1", "avenger2", "avenger3"];
var avenger1 = avengers3[0], avenger3 = avengers3[2];
console.log(avenger1);
//console.log(avenger2);
console.log(avenger3);
var coche1 = {
    marca: "Seat",
    modelo: "León"
};
var coche2 = {
    marca: "Ford",
    modelo: "Focus"
};
var coches = [coche1, coche2];
for (var _i = 0, coches_1 = coches; _i < coches_1.length; _i++) {
    var coche = coches_1[_i];
    console.log(coche.marca, coche.modelo);
}
