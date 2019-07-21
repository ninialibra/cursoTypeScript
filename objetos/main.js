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
