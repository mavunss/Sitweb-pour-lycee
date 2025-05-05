
document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.className = currentTheme + '-theme';
    
    const themeButton = document.getElementById('themeButton');
    themeButton.addEventListener('click', toggleTheme);
    
    setInterval(afficherHeure, 1000);
    afficherHeure();
});

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');
    
    body.classList.remove(isDark ? 'dark-theme' : 'light-theme');
    body.classList.add(isDark ? 'light-theme' : 'dark-theme');

    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

function afficherHeure() {
    const now = new Date();
    document.getElementById('heure').textContent = 
        `Heure actuelle : ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
}

function afficherMessage() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const message = document.getElementById('message');
    
    message.textContent = nom && prenom 
        ? `Bonjour ${nom} ${prenom}, bienvenue sur le site Saint Pierre !`
        : "Veuillez saisir votre nom et prénom.";
}