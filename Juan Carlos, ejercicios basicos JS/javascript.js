// Función para determinar si un número es par
function espar(num) {
    return num % 2 === 0;
}

// Función para calcular el área de un rectángulo
function areaRectangulo(ancho, alto) {
    return ancho * alto;
}

// Función para comprobar par/impar
function checkParImpar() {
    let num = document.getElementById('num1').value;
    if (num === '') {
        document.getElementById('result1').textContent = 'Por favor, introduce un número.';
        return;
    }
    num = parseInt(num);
    let resultado = espar(num) ? 'par' : 'impar';
    document.getElementById('result1').textContent = 'El número ' + num + ' es ' + resultado + '.';
}

// Función para calcular área
function calcularArea() {
    let ancho = document.getElementById('ancho').value;
    let alto = document.getElementById('alto').value;
    if (ancho === '' || alto === '') {
        document.getElementById('result2').textContent = 'Por favor, introduce ancho y alto.';
        return;
    }
    ancho = parseFloat(ancho);
    alto = parseFloat(alto);
    let area = areaRectangulo(ancho, alto);
    document.getElementById('result2').textContent = 'El área del rectángulo es ' + area + ' unidades cuadradas.';
}

// Función para validar DNI
function validarDNI() {
    let num = document.getElementById('dniNum').value;
    let letra = document.getElementById('dniLetra').value.toUpperCase();
    if (num === '' || letra === '') {
        document.getElementById('result3').textContent = 'Por favor, introduce número y letra del DNI.';
        return;
    }
    num = parseInt(num);
    let resultado = validarDNIExterno(num, letra);
    document.getElementById('result3').textContent = resultado;
}
