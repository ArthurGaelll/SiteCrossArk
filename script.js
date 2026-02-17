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

const planSelect = document.getElementById('plan-select');
const displayPrice = document.getElementById('display-price');
const displayLabel = document.getElementById('display-label');

planSelect.addEventListener('change', (e) => {
    // Pega o valor (preço) selecionado
    const selectedPrice = e.target.value;
    // Pega o texto da opção selecionada (Ex: Mensal)
    const selectedLabel = e.target.options[e.target.selectedIndex].text;

    // Atualiza a tela com animação de fade
    const card = document.querySelector('.planosinfo');
    card.style.opacity = '0';
    
    setTimeout(() => {
        displayPrice.innerText = `R$ ${selectedPrice}`;
        displayLabel.innerText = selectedLabel;
        card.style.opacity = '1';
    }, 200);
});
