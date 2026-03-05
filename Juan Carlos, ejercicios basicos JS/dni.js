// Función para validar DNI
function validarDNIExterno(num, letra) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letraCorrecta = letras[num % 23];
    if (letra === letraCorrecta) {
        return 'El DNI es correcto.';
    } else {
        return 'La letra del DNI es incorrecta. La letra correcta es: ' + letraCorrecta;
    }
}