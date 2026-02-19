
// Función para determinar si un número es par o impar
function esPar(numero) {
    return numero % 2 === 0;
}

// Función para calcular el área de un rectángulo
function areaRectangulo(base, altura) {
    return base * altura;
}

// Función para validar el DNI (8 dígitos + letra)
function validarDNI(dni, letra) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const numeroDNI = parseInt(dni);
    if (isNaN(numeroDNI)) return false;
    const letraCalculada = letras[numeroDNI % 23];
    return letraCalculada === letra.toUpperCase();
}

// Mostrar resultado de validación del DNI (solo si existe el elemento)
function mostrarResultadoDNI(dni, letra) {
    const resultado = document.getElementById("resultadoDNI");
    if (!resultado) return;
    if (validarDNI(dni, letra)) {
        resultado.textContent = "El DNI es correcto.";
    } else {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const numeroDNI = parseInt(dni);
        const letraCorrecta = !isNaN(numeroDNI) ? letras[numeroDNI % 23] : "-";
        resultado.textContent = `El DNI es incorrecto. La letra correcta es: ${letraCorrecta}`;
    }
}

// Manejar el evento de validación del DNI (si existen los elementos esperados)
function validarDNIEvento() {
    const dniElem = document.getElementById("dniInput");
    const letraElem = document.getElementById("letraInput");
    if (!dniElem || !letraElem) return;
    const dniInput = dniElem.value;
    const letraInput = letraElem.value;
    mostrarResultadoDNI(dniInput, letraInput);
}

// Solo añadir el listener si el elemento existe (evita errores al cargar)
const botonValidarDNI = document.getElementById("validarDNI");
if (botonValidarDNI) {
    botonValidarDNI.addEventListener("click", validarDNIEvento);
}

// Función llamada desde el botón del formulario: valida los campos y muestra errores
function validarFormulario() {
    const codigo = document.getElementById("codigo");
    const nombre = document.getElementById("nombre");
    const dni = document.getElementById("dni");
    const telefono = document.getElementById("telefono");
    const correo = document.getElementById("correo");

    const codigoError = document.getElementById("codigoError");
    const nombreError = document.getElementById("nombreError");
    const dniError = document.getElementById("dniError");
    const telefonoError = document.getElementById("telefonoError");
    const correoError = document.getElementById("correoError");

    // Limpiar mensajes previos
    if (codigoError) codigoError.textContent = "";
    if (nombreError) nombreError.textContent = "";
    if (dniError) dniError.textContent = "";
    if (telefonoError) telefonoError.textContent = "";
    if (correoError) correoError.textContent = "";
    const successDiv = document.getElementById("mensajeExito");
    if (successDiv) successDiv.textContent = "";

    let valid = true;

    // Validaciones simples
    if (!codigo || codigo.value.trim() === "") {
        if (codigoError) codigoError.textContent = "Código requerido.";
        valid = false;
    }

    if (!nombre || !/^[-A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.value.trim())) {
        if (nombreError) nombreError.textContent = "Nombre válido requerido.";
        valid = false;
    }

    if (!dni || !/^(\d{8})([A-Za-z])$/.test(dni.value.trim())) {
        if (dniError) dniError.textContent = "DNI debe tener 8 dígitos y una letra.";
        valid = false;
    } else {
        const m = dni.value.trim().match(/^(\d{8})([A-Za-z])$/);
        if (m && !validarDNI(m[1], m[2])) {
            if (dniError) dniError.textContent = "Letra del DNI incorrecta.";
            valid = false;
        }
    }

    if (!telefono || !/^\d{9}$/.test(telefono.value.trim())) {
        if (telefonoError) telefonoError.textContent = "Teléfono de 9 dígitos requerido.";
        valid = false;
    }

    if (!correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
        if (correoError) correoError.textContent = "E-mail inválido.";
        valid = false;
    }

    if (valid) {
        if (successDiv) {
            successDiv.textContent = "Formulario válido";
            successDiv.style.color = "green";
        }
    }

    return valid;
}

// Limpiar mensaje de éxito y errores al hacer reset del formulario
const miFormulario = document.getElementById('miFormulario');
if (miFormulario) {
    miFormulario.addEventListener('reset', function() {
        const s = document.getElementById('mensajeExito');
        if (s) s.textContent = '';
        const errs = document.querySelectorAll('.error');
        errs.forEach(e => e.textContent = '');
    });
}
