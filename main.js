/* ==========================================================
   OpenBao (imitación simplificada) - Script principal
   Solo se encarga del menú desplegable en pantallas pequeñas
   ========================================================== */

// Esperamos a que la página termine de cargar
document.addEventListener("DOMContentLoaded", function () {
  var boton = document.getElementById("boton-menu"); // botón hamburguesa
  var menu = document.getElementById("menu");        // lista de enlaces

  if (boton && menu) {
    // Al pulsar el botón se muestra u oculta el menú
    boton.addEventListener("click", function () {
      var abierto = menu.classList.toggle("abierto");
      // Accesibilidad: avisamos a los lectores de pantalla del estado
      boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
  }
});
