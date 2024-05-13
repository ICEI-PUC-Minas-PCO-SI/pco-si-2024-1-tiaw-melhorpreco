function lerProdutos() {
    fetch('../assets/json/db.json')
      .then(response => response.json())
      .then(data => preencherListaProdutos(data.produtos))
      .catch(error => console.error(error));
}

function preencherListaProdutos(produtos) {
    const listaProdutos = document.getElementById('lista-produtos');

    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');

        const nomeProduto = document.createElement('h1');
        nomeProduto.classList.add('text-primary', 'fs-2');
        nomeProduto.textContent = produto.titulo;

        const imagemProduto = document.createElement('img');
        imagemProduto.src = produto.imagem;
        imagemProduto.alt = 'Imagem do Produto';

        divProduto.appendChild(nomeProduto);
        divProduto.appendChild(imagemProduto);

        listaProdutos.appendChild(divProduto);

        // Adiciona evento de clique para redirecionar para a página do produto
        divProduto.addEventListener('click', () => {
            window.location.href = 'Tela_Produto.html?id=' + produto.id;
        });
    });
}

lerProdutos();
