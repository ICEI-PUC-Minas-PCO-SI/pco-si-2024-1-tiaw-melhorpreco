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
    const parcelamento = document.getElementById('parcelamento')

    // Extraindo as informações de BRAND e COLOR
    const brand = produto.attributes.find(attr => attr.id === 'BRAND');
    const color = produto.attributes.find(attr => attr.id === 'COLOR');
    //const gpu = produto.attributes.find(attr => attr.id === 'GPU_MODEL');
    const condicao = produto.attributes.find(attr=> attr.id === 'ITEM_CONDITION');
    const linha = produto.attributes.find(attr => attr.id ===  'LINE');
    const modelo = produto.attributes.find(attr => attr.id === 'MODEL');
    const embalagem = produto.attributes.find(attr =>attr.id === 'PACKAGE_LENGTH');
    const embalagemPeso = produto.attributes.find(attr => attr.id === 'PACKAGE_WEIGHT');
    const peso = produto.attributes.find(attr => attr.id === 'WEIGHT');

    // Criando a descrição do produto com base nas informações de BRAND e COLOR
    const descricao = `${brand ? `${brand.name}: ${brand.value_name}, <br>` : ''} 
    ${color ? `${color.name}: ${color.value_name}, <br>` : ''} 
    ${condicao ? `${condicao.name}: ${condicao.value_name}, <br>` : ''}
    ${linha ? `${linha.name}: ${linha.value_name}, <br>` : ''}
    ${modelo ? `${modelo.name}: ${modelo.value_name}, <br>` : ''}
    ${embalagem ? `${embalagem.name}: ${embalagem.value_name}, <br>` : ''}
    ${embalagemPeso ? `${embalagemPeso.name}: ${embalagemPeso.value_name}, <br>` : ''}
    ${peso ? `${peso.name}: ${peso.value_name}` : ''}`;


    nomeProduto.textContent = produto.title;
    imagemProduto.src = produto.thumbnail;
    descricaoProduto.innerHTML = descricao;
    precoProduto.textContent = `R$ ${produto.price}`;
    if (produto.installments) {
        parcelamento.textContent = `em ${produto.installments.quantity ? produto.installments.quantity : ' '}x R$ 
        ${produto.installments.amount ? produto.installments.amount : ' '}`;
    } else {
        parcelamento.textContent = '';
    }
}

lerProduto();
function redirecionar() {
  window.location.href = `'${produto.permalink}'`;
}