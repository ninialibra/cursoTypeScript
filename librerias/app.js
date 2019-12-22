"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
require("sweetalert");
console.log("Hola mundo");
$("#botAlerta").on("click", function () {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
});
