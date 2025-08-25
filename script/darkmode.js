// Pega o botão
const darkModeToggle = document.getElementById('darkModeToggle');

// Adiciona um evento de clique
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Ativa/desativa o dark mode

    // Opcional: Salva a preferência no navegador
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Verifica se o usuário já ativou antes (opcional)
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}