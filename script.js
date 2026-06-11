// Array que vai guardar os produtos que o usuário adicionar
let carrinho = [];
let total = 0;

// Função para adicionar itens ao resumo
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    // Adiciona o produto ao array do carrinho
    carrinho.push({ nome: nomeProduto, preco: precoProduto });
    
    // Atualiza o valor total
    total += precoProduto;
    
    // Atualiza a tela
    atualizarInterfaceCarrinho();
}

// Função para atualizar a lista na tela
function atualizarInterfaceCarrinho() {
    const listaHtml = document.getElementById('itens-carrinho');
    const precoTotalHtml = document.getElementById('total-preco');
    
    // Limpa a lista atual
    listaHtml.innerHTML = '';
    
    if (carrinho.length === 0) {
        listaHtml.innerHTML = '<li class="vazio">Nenhum item selecionado.</li>';
    } else {
        // Passa por cada item do carrinho e cria a linha HTML
        carrinho.forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>🍇 ${item.nome}</span> <span>R$ ${item.preco.toFixed(2)}</span>`;
            listaHtml.appendChild(li);
        });
    }
    
    // Atualiza o preço total formatado
    precoTotalHtml.innerText = total.toFixed(2).replace('.', ',');
}

// Função que simula a finalização gerando uma mensagem de WhatsApp
function finalizarPedido() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio! Selecione alguma uva antes de finalizar.");
        return;
    }
    
    // Monta o texto da mensagem
    let mensagem = "Olá! Gostaria de encomendar as seguintes caixas de uva:\n\n";
    carrinho.forEach(item => {
        mensagem += `- ${item.nome} (R$ ${item.preco.toFixed(2)})\n`;
    });
    mensagem += `\n*Total do Pedido: R$ ${total.toFixed(2)}*`;
    
    // Codifica o texto para formato de URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Abre uma nova aba simulando o envio para um WhatsApp fictício (ex: 5511999999999)
    window.open(`https://wa.me/5511999999999?text=${mensagemCodificada}`, '_blank');
}