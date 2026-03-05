// Programa que calcula la suma de dos números

// Función para calcular y mostrar la suma
function calcularSuma() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    // Verificar que se hayan introducido valores
    if (num1 === '' || num2 === '') {
        alert('Por favor, introduce ambos números.');
        return;
    }

    // Convertir a números y calcular la suma
    let suma = parseFloat(num1) + parseFloat(num2);

    // Mostrar el resultado por consola
    console.log("La suma de " + num1 + " y " + num2 + " es: " + suma);

    // Mostrar el resultado en el documento
    let resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerHTML = "<h2>Resultado</h2><p>La suma de " + num1 + " y " + num2 + " es: <strong>" + suma + "</strong></p>";
    } else {
        alert("No se encontró el elemento con id='result'. Asegúrate de tener un <div id='result'></div> en tu HTML.");
    }
}