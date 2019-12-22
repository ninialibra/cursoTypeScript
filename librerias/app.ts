import "jquery";
import "sweetalert";

console.log("Hola mundo");

$("#botAlerta").on("click", function(){
    
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )

});