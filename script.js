// Seleção de elementos do Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
//A lógica foi gerada com auxílio de IA.
// Alternar classe ativa ao clicar no ícone de hambúrguer
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fechar o menu ao clicar em qualquer link (útil para navegação em página única)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Função interativa para o botão de compras
function comprar(nomeUva) {
    alert(`🍇 Ótima escolha! Você selecionou a uva: ${nomeUva}.\nNossa equipe entrará em contato via WhatsApp/E-mail para combinar a entrega dos frutos frescos.`);
}

// Interceptação do envio do formulário de contato (Simulação)
function enviarFormulario(event) {
    event.preventDefault(); // Impede o recarregamento da página
    
    // Aqui você capturaria os dados se houvesse backend.
    alert('✉️ Mensagem enviada com sucesso! Agradecemos o contato. Responderemos em até 24 horas.');
    
    // Limpa o formulário
    document.getElementById('contact-form').reset();
}