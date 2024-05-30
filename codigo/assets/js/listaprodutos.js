document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formBusca').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        const buscaDigitada = document.getElementById('inputBusca').value;
        buscarProduto(buscaDigitada);
    });
});

function buscarProduto(buscaDigitada) {
    fetch("/getIten")
      .then(response => response.json())
      .then(data => {
          console.log('Produtos encontrados:', data);
          preencherListaProdutos(data.results);
      })
      .catch(error => console.error(error));
}




function lerProdutos() {
    fetch('../assets/json/db.json') // Corrija o caminho para o arquivo JSON
      .then(response => response.json())
      .then(data => preencherListaProdutos(data.results))
      .catch(error => console.error(error));
}

function preencherListaProdutos(results) {
    const listaProdutos = document.getElementById('lista-produtos');

    results.forEach(produto => { // Use a lista de produtos fornecida como argumento
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');

        const nomeProduto = document.createElement('h1');
        nomeProduto.classList.add('text-primary', 'fs-2');
        nomeProduto.textContent = produto.title;

        const imagemProduto = document.createElement('img');
        imagemProduto.src = produto.thumbnail;
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
