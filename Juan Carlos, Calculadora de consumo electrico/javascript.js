// Función para calcular el consumo total en kWh
function calcularConsumo(potencia, horas, dias) {
    // Convertir watts a kilowatts
    let potenciaKw = potencia / 1000;
    // Calcular consumo total (kWh)
    let consumoTotal = potenciaKw * horas * dias;
    return consumoTotal;
}

// Función para calcular el precio total
function calcularPrecio(consumo, precioKwh) {
    return consumo * precioKwh;
}

// Función para actualizar los resultados automáticamente
function actualizarResultados() {
    let deviceName = document.getElementById('deviceName').value;
    let consumption = parseFloat(document.getElementById('consumption').value) || 0;
    let hours = parseFloat(document.getElementById('hours').value) || 0;
    let days = parseFloat(document.getElementById('days').value) || 0;
    let priceKwh = parseFloat(document.getElementById('priceKwh').value) || 0;

    // Calcular consumo total
    let consumoTotal = calcularConsumo(consumption, hours, days);
    document.getElementById('totalConsumption').textContent = consumoTotal.toFixed(2);

    // Calcular precio total
    let precioTotal = calcularPrecio(consumoTotal, priceKwh);
    document.getElementById('totalPrice').textContent = precioTotal.toFixed(2) + ' €';
}

// Función para registrar en la consola
function registrarConsola() {
    let deviceName = document.getElementById('deviceName').value;
    let hours = parseFloat(document.getElementById('hours').value) || 0;
    let days = parseFloat(document.getElementById('days').value) || 0;
    let precioTotal = document.getElementById('totalPrice').textContent;

    if (deviceName === '') {
        alert('Por favor, introduce el nombre del dispositivo.');
        return;
    }

    let mensaje = 'Consumo de ' + deviceName + ', ' + hours + ' horas ' + days + ' días es ' + precioTotal;
    console.log(mensaje);
    alert('Registro guardado en la consola: ' + mensaje);
}

// eventos a los inputs para actualizar automáticamente
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('consumption').addEventListener('input', actualizarResultados);
    document.getElementById('hours').addEventListener('input', actualizarResultados);
    document.getElementById('days').addEventListener('input', actualizarResultados);
    document.getElementById('priceKwh').addEventListener('input', actualizarResultados);

    // eventos para el botón de ayuda
    let helpBtn = document.getElementById('helpBtn');
    let helpTooltip = document.getElementById('helpTooltip');

    helpBtn.addEventListener('mouseover', function() {
        helpTooltip.style.display = 'block';
    });

    helpBtn.addEventListener('mouseout', function() {
        helpTooltip.style.display = 'none';
    });
});
