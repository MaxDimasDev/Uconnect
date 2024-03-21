// Existing functions ...

// Add click event listeners to the top buttons
document.getElementById('notificationsButton').addEventListener('click', function() {
    alert("Notifications button clicked!");
    // Add more functionality if needed
});

document.getElementById('messagesButton').addEventListener('click', function() {
    alert("Messages button clicked!");
    // Add more functionality if needed
});

document.getElementById('profileButton').addEventListener('click', function() {
    alert("Profile button clicked!");
    // Add more functionality if needed
});

// The home button (if you want to add a click event to it)
document.querySelector('.homeButton').addEventListener('click', function() {
    alert("Home button clicked!");
    // Add more functionality if needed
});

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