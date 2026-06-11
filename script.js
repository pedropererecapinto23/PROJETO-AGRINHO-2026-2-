// Função para alternar entre as páginas do site
function mudarPagina(idPagina) {
    // Esconde todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(p => p.classList.remove('active'));

    // Remove a classe ativa de todos os links do menu
    const links = document.querySelectorAll('.nav-link');
    links.forEach(l => l.classList.remove('active'));

    // Mostra a página selecionada
    document.getElementById(`pag-${idPagina}`).classList.add('active');

    // Destaca o link clicado no menu
    event.currentTarget.classList.add('active');
}

// Lógica do Simulador da Plantação de Uvas
function simular栽培() {
    const opcao = document.getElementById('irrigacao').value;
    const resultadoBox = document.getElementById('resultado');
    const pProducao = document.getElementById('res-producao');
    const pAmbiente = document.getElementById('res-ambiente');
    const badge = document.getElementById('status-equilibrio');

    // Revela a caixinha de resultado
    resultadoBox.classList.remove('hidden');

    // Limpa classes anteriores do badge
    badge.className = "badge";

    if (opcao === 'gotejamento') {
        pProducao.innerHTML = "<strong>🍇 Produção:</strong> Alta qualidade! As uvas recebem a quantidade ideal de água diretamente nas raízes, aumentando os açúcares naturais (grau brix) ideais para consumo e sucos.";
        pAmbiente.innerHTML = "<strong>🌱 Meio Ambiente:</strong> Economia de até 60% de água. Reduz a proliferação de fungos nas folhas e evita a erosão do solo.";
        badge.innerText = "Equilíbrio Perfeito! ⭐⭐⭐";
        badge.classList.add('sucesso');
        
    } else if (opcao === 'aspersao') {
        pProducao.innerHTML = "<strong>🍇 Produção:</strong> Boa quantidade, mas o excesso de umidade nas folhas pode atrair doenças que estragam os cachos de uva.";
        pAmbiente.innerHTML = "<strong>🌱 Meio Ambiente:</strong> Desperdício médio de água por evaporação. Risco moderado de compactação do solo devido ao impacto das gotas.";
        badge.innerText = "Produção Forte, mas falta Sustentabilidade ⚠️";
        badge.classList.add('alerta');
        
    } else if (opcao === 'manual') {
        pProducao.innerHTML = "<strong>🍇 Produção:</strong> Irregular. Algumas fileiras de videiras ficam encharcadas e outras secas, gerando uvas de tamanhos desiguais.";
        pAmbiente.innerHTML = "<strong>🌱 Meio Ambiente:</strong> Altíssimo desperdício de água. Causa lavagem de nutrientes do solo (lixiviação) e exige mais fertilizantes químicos depois.";
        badge.innerText = "Desequilíbrio Crítico ❌";
        badge.classList.add('perigo');
    }
}