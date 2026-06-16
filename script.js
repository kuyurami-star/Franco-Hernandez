//Esperar a que el documento cargue por completo
document.addEventListener("DOMContentLoaded", function() {
    
    // Buscar el botón y el párrafo oculto por sus IDs
    const boton = document.getElementById("btn-contacto");
    const mensaje = document.getElementById("mensaje-oculto");

    // Añadir el evento de clic al botón
    boton.addEventListener("click", function() {
        // Intercambiar clases para mostrar u ocultar
        if (mensaje.classList.contains("hidden")) {
            mensaje.classList.remove("hidden");
            mensaje.classList.add("show");
            boton.textContent = "Ocultar Mensaje";
        } else {
            mensaje.classList.remove("show");
            mensaje.classList.add("hidden");
            boton.textContent = "Mostrar Mensaje de Inspiración";
        }
    });
});