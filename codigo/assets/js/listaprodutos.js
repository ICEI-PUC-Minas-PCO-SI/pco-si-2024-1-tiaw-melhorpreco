document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formBusca').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        const buscaDigitada = document.getElementById('inputBusca').value;
        buscarProduto(buscaDigitada);
    });
});

//foi necessário coloar a rota de onde está rodando o Node, pois a porta que está rodando o html é diferente.
function buscarProduto(buscaDigitada) {
    fetch(`http://localhost:3000/getIten?busca=${encodeURIComponent(buscaDigitada)}`)
      .then(response => response.json())
      .then(data => {
          console.log('Produtos encontrados:', data);
          preencherListaProdutos(data.results);
      })
      .catch(error => console.error(error));
}



function lerProdutos() {
    fetch('../assets/json/db.json') 
      .then(response => response.json())
      .then(data => preencherListaProdutos(data.results))
      .catch(error => console.error(error));
}

function preencherListaProdutos(results) {

    
        const listaProdutos = document.getElementById('cards-container');

        results.forEach(produto => { 
            // Use a lista de produtos fornecida como argumento
            if (produto.attributes.value_name !=="Usado"){
                    const col = document.createElement('div');
                col.classList.add('col-md-4');

                const card = document.createElement('div');
                card.classList.add('card');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

            

                const imagem = document.createElement('img');
                imagem.classList.add('card-img-top');
                imagem.src = produto.thumbnail;
                imagem.alt = 'Imagem do Produto';
                imagem.width = 284 ; // Largura da imagem
                imagem.height = 284; // Altura da imagem
                //imagem.style.filter = 'brightness(90%)'; // Ajuste de brilho (exemplo: 80%)

                const titulo = document.createElement('h5');
                titulo.classList.add('card-title');
                titulo.textContent = produto.title;

                const descricao = document.createElement('p');
                descricao.classList.add('card-text');
                if(produto.shipping.free_shipping){
                    descricao.textContent = "Frete Grátis";
                }
                

                const preco = document.createElement('p');
                preco.classList.add('card-text');
                preco.textContent = `Preço: ${produto.price}`;

                const parcelamento = document.createElement('p');
                parcelamento.classList.add('card-text');
                parcelamento.textContent = `em ${produto.installments.quantity}x R$ ${produto.installments.amount}`;

                cardBody.appendChild(titulo);
                cardBody.appendChild(imagem);
                cardBody.appendChild(descricao);
                cardBody.appendChild(preco);
                cardBody.appendChild(parcelamento);
                card.appendChild(cardBody);
                col.appendChild(card);

                listaProdutos.appendChild(col);

                // Adiciona evento de clique para redirecionar para a página do produto
                card.addEventListener('click', () => {
                    window.location.href = 'Tela_Produto.html?id=' + produto.id;
                });
            }
            
        });

    
    
}

lerProdutos();
