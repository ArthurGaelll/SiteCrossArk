// Seleciona o botão e o menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    // Agora o toggle de classe funciona no 'menu' que envolve os links
    menu.classList.toggle('active'); 
});

// Fecha o menu ao clicar no link (Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Lógica dos Planos (Mantive idêntica à sua)
document.querySelectorAll('.plan-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.plan-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const priceEl = document.getElementById('display-price');
        const labelEl = document.getElementById('display-label');

        priceEl.innerText = `R$ ${button.getAttribute('data-price')}`;
        labelEl.innerText = button.getAttribute('data-label');
    });
});

document.querySelectorAll('.plan-btn').forEach(button => {
    button.addEventListener('click', () => {
        // 1. Remove classe 'active' de todos e adiciona no clicado
        document.querySelectorAll('.plan-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 2. Captura os dados do botão
        const newPrice = button.getAttribute('data-price');
        const newLabel = button.getAttribute('data-label');

        // 3. Atualiza o card com animação
        const priceEl = document.getElementById('display-price');
        const labelEl = document.getElementById('display-label');

        // Adiciona classe de animação
        priceEl.parentElement.classList.remove('fade-in');
        void priceEl.offsetWidth; // Truque para resetar animação CSS
        priceEl.parentElement.classList.add('fade-in');

        // Troca o texto
        priceEl.innerText = `R$ ${newPrice}`;
        labelEl.innerText = newLabel;
    });
});



const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.removeAttribute("open");
            }
        });
    });
});