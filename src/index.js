import validator from './validator.js';

document.getElementById("input-button").addEventListener("click", () => {

    let digitos = (document.getElementById("NumeroDeTarjeta").value);
    let enmascarado = (validator.maskify(digitos));
    if (validator.isValid(digitos) == true) {
        alert(('Tarjeta válida ') + enmascarado);
    } else {
        alert('Tarjeta inválida, intente nuevamente');
    }


})