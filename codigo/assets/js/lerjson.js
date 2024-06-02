function lerProduto() {
  const params = new URLSearchParams(window.location.search);
  const idProduto = params.get('id');

  fetch('../assets/json/db.json')
      .then(response => response.json())
      .then(data => {
          console.log('Dados do JSON:', data);
          const produto = data.results.find(produto => produto.id == idProduto);
          if (produto) {
              console.log('Produto encontrado:', produto);
              preencherDetalhes(produto);
          } else {
              console.error('Produto não encontrado');
          }
      })
      .catch(error => console.error(error));
}

function preencherDetalhes(produto) {
    console.log('Preenchendo detalhes do produto:', produto);
    const nomeProduto = document.getElementById('nome-produto');
    const imagemProduto = document.getElementById('imagem-produto');
    const descricaoProduto = document.getElementById('descricao-produto');
    const precoProduto = document.getElementById('preco-produto');

    nomeProduto.textContent = produto.title;
    imagemProduto.src = produto.thumbnail;
    descricaoProduto.textContent = produto.listing_type_id;
    precoProduto.textContent = `R$ ${produto.price}`;
}

lerProduto();
function redirecionar() {
  window.location.href = 'revendedor.html';
}