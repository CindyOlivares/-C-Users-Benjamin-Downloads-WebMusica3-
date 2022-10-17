
var nomb = document.getElementById("nombre");
var ape = document.getElementById("apellido");
var mail = document.getElementById("email");
var comen = document.getElementById("comentario");
var error = document.getElementById("error");
error.style.color = "black";

function validarDatos() {
    console.log("Formulario enviado");

    var mensajeError = [];

    if (nomb.value === "") {
        mensajeError.push("Ingresá tu nombre");
    }

    if (ape.value === "") {
        mensajeError.push("Ingresá tu apellido");
    }

    if (mail.value === "" || mail.value === null) {
        mensajeError.push("Ingresá tu email");
    }

    if (comen.value === "") {
        mensajeError.push("Dejanos un mensaje.");
    }
    error.innerHTML = mensajeError.join(", ");

    return false;

}
