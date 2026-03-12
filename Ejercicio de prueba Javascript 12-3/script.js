let totalPagado = 0;

const pagadoInput = document.getElementById("pagado");
const cambioInput = document.getElementById("cambio");
const importeInput = document.getElementById("importe");

// Función para actualizar el pago
function actualizarPago(cantidad) {
  const importe = parseFloat(importeInput.value);
  
  if (isNaN(importe) || importe <= 0) {
    alert("Introduce primero un importe válido.");
    return;
  }
  
  totalPagado += parseFloat(cantidad);
  pagadoInput.value = totalPagado.toFixed(2);

  if (totalPagado < importe) {
    pagadoInput.classList.add("error");
    cambioInput.value = "";
  } else {
    pagadoInput.classList.remove("error");
    cambioInput.value = (totalPagado - importe).toFixed(2);
  }
}

// Añadimos event listeners a monedas y billetes
document.querySelectorAll(".moneda, .billete").forEach(el => {
  el.addEventListener("click", () => {
    actualizarPago(el.dataset.valor);
  });
});

// Botón reset
document.getElementById("reset").addEventListener("click", () => {
  totalPagado = 0;
  pagadoInput.value = "";
  cambioInput.value = "";
  pagadoInput.classList.remove("error");
  importeInput.value = "";
});