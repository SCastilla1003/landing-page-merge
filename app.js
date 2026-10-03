document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btnSaludo");
  if (boton) {
    boton.addEventListener("click", function () {
      alert("¡Hola! Bienvenido a nuestra página.");
    });
  }
});