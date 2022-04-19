import validator from './validator.js';

document.getElementById("input-button").addEventListener("click", () => {

    let digitos = (document.getElementById("NumeroDeTarjeta").value);

    validator(digitos);
    if (validator(digitos) == true) {
        alert('Tarjeta válida');
    } else {
        alert('Tarjeta inválida, intente nuevamente');
    }

    console.log(validator);


})