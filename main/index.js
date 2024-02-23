// funcion para cambiar de paginas
function changeContentMain() {
    document.querySelector('.center-top').innerHTML = "<h2>Página Principal</h2><p>Contenido de la página principal...</p>";
}

function changeContentFood() {
    document.querySelector('.center-top').innerHTML = "<h2>Sección de Alimentos</h2><p>Contenido de la sección de alimentos...</p>";
}

function changeContentJobs() {
    document.querySelector('.center-top').innerHTML = "<h2>Sección de Empleos</h2><p>Contenido de la sección de empleos...</p>";
}

document.querySelector('.notifications').addEventListener('click', function() {
    alert("Mostrar notificaciones recientes");
    // codigo faltante para mostrar las notificaciones recientes
});

document.querySelector('.msg').addEventListener('click', function() {
    alert("Abrir cuadro de diálogo de mensajes");
    // codigo faltante para abrir el cuadro de diálogo de mensajes
});

// Agregar más interacciones según sea necesario
