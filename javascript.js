const hamburger = document.querySelector('.hamburger'); // Seleciona o botão de três risquinhos
const menu = document.querySelector('.menu');           // Seleciona o container do menu


hamburger.addEventListener('click', () => {
    // Adiciona a classe 'active' se ela não existir, ou remove se ela já existir
    menu.classList.toggle('active'); 
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {

        // 1. Garante que o menu feche ao clicar em um link (importante no mobile)
        menu.classList.remove('active');

        // 2. Captura o destino do link (ex: #sobre ou #coaches)
        const href = this.getAttribute('href');

        // 3. Verifica se o link é uma âncora interna (começa com #)
        if (href.startsWith('#')) {
            e.preventDefault(); // Impede o navegador de "pular" instantaneamente para a seção

            const targetId = href;
            const targetElement = document.querySelector(targetId);

            // 4. Executa o deslizamento suave até o elemento de destino
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Define que o movimento será fluido e não um corte seco
                });
            }
        }
    });
});