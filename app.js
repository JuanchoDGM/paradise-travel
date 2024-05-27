// Función para capturar las opciones seleccionadas y redirigir a la página de recomendaciones
document.getElementById("generarRespuestas").addEventListener("click", function() {
    // Capturar las opciones seleccionadas
    var opciones = [];
    var formularios = document.querySelectorAll("form");
    formularios.forEach(function(formulario) {
        var opcionSeleccionada = formulario.querySelector("input:checked");
        if (opcionSeleccionada) {
            opciones.push(opcionSeleccionada.id);
        }
    });

    // Construir la URL con las opciones seleccionadas como parámetros
    var url = "recomendaciones.html?";
    opciones.forEach(function(opcion, index) {
        if (index !== 0) {
            url += "&";
        }
        url += "op" + (index + 1) + "=" + opcion;
    });

    // Redirigir a la página de recomendaciones
    window.location.href = url;
});