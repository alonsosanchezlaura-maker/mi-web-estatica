// Esperamos a que el DOM cargue completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleButton');
    const extraInfo = document.getElementById('extraInfo');

    // Función para mostrar u ocultar la información adicional
    toggleButton.addEventListener('click', function() {
        if (extraInfo.style.display === "none") {
            extraInfo.style.display = "block";
            toggleButton.textContent = "Ocultar información";
        } else {
            extraInfo.style.display = "none";
            toggleButton.textContent = "Mostrar más información";
        }
    });
});
// Nueva funcionalidad para "Sobre Mi"
document.querySelector('a[href="#sobre-mi"]').addEventListener("click", function(e) {
    e.preventDefault(); // Evita el salto de página predeterminado
    var seccionSobreMi = document.getElementById("sobre-mi");
    if (seccionSobreMi.style.display === "none" || seccionSobreMi.style.display === "") {
        seccionSobreMi.style.display = "block";
    } else {
        seccionSobreMi.style.display = "none";
    }
});