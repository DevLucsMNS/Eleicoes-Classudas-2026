// Função para abrir/fechar o histórico
function toggleHistory(elementoClicado) {
    elementoClicado.classList.toggle('active');
}

function esconderLoader() {
    const loader = document.getElementById('loader');
    const heroContent = document.querySelector('.hero-content');

    if (loader && !loader.classList.contains('loader-hidden')) {
        console.log("Escondendo loader...");
        loader.classList.add('loader-hidden');
        
        // Dispara a animação do Hero logo após o loader começar a sumir
        if (heroContent) {
            setTimeout(() => {
                console.log("Iniciando animação do Hero!");
                heroContent.classList.add('iniciar-animacao');
            }, 300); // Pequeno delay para suavidade
        }
    }
}

// Evento principal: Quando tudo carregar
window.addEventListener('load', () => {
    console.log("Página 100% carregada.");
    setTimeout(esconderLoader, 1500); // Tempo para apreciarem meu loading
});

// Failsafe: Se em 5s não carregar tudo, libera o site
setTimeout(() => {
    if (document.getElementById('loader') && !document.getElementById('loader').classList.contains('loader-hidden')) {
        console.warn("Failsafe ativado: Forçando saída do loader.");
        esconderLoader();
    }
}, 5000);

// Função para abrir/fechar a gaveta dos partidos
function toggleParty(card) {
    const outrosCards = document.querySelectorAll('.chapa-card');
    outrosCards.forEach(outro => {
        if (outro !== card) outro.classList.remove('active');
    });

    // Abre ou fecha o card clicado
    card.classList.toggle('active');
}