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
var cosa = "adsa";
if (typeof cosa === "number") {
    console.log("Cosa es un número");
}
else {
    console.log("Cosa NO es un número");
}
