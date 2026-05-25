// Función para calcular el IMC
function calcularImc(peso, estatura) {
    return peso / (estatura*estatura);
}

    let imc = calcularImc(peso, estatura);
    document.getElementById('imc').textContent = imc;

// eventos para el botón de ayuda
    let helpBtn = document.getElementById('helpBtn');
    let helpTooltip = document.getElementById('helpTooltip');

    helpBtn.addEventListener('mouseover', function() {
        helpTooltip.style.display = 'block';
    });

    helpBtn.addEventListener('mouseout', function() {
        helpTooltip.style.display = 'none';
    });

// Botón reset
document.getElementById("reset").addEventListener("click", () => {
imc = 0;
pesoInput.value = "";
estaturaInput.value = "";
});



