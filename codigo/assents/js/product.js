
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    const productPrice = urlParams.get('price');
    const productDescription = urlParams.get('description');
    const productImage = urlParams.get('image');

    document.getElementById('product-name').innerText = productName;
    document.getElementById('product-price').innerText = `Preço: R$ ${productPrice}`;
    document.getElementById('product-description').innerText = productDescription;
    document.getElementById('product-image').src = productImage;
});
async function fetchProductDetails(productId) {
      const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
      const data = await response.json();
      return data;
    }

    async function fetchProductDescription(productId) {
      const response = await fetch(`https://api.mercadolibre.com/items/${productId}/description`);
      const data = await response.json();
      return data;
    }

    function displayProductDetails(product) {
      document.getElementById('productTitle').textContent = product.title;
      document.getElementById('productPrice').textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
      document.getElementById('productInstallments').textContent = product.installments ? `até ${product.installments.quantity}x de R$ ${product.installments.amount.toFixed(2).replace('.', ',')} com juros` : '';
      document.getElementById('productShipping').textContent = product.shipping.free_shipping ? 'Frete Grátis' : '';
      document.getElementById('buyButton').href = product.permalink; // Adiciona o link ao botão "Comprar agora"

      const carouselInner = document.getElementById('carouselInner');
      const carouselThumbnails = document.getElementById('carouselThumbnails');

      carouselInner.innerHTML = product.pictures.map((picture, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img class="d-block w-100" src="${picture.url}" alt="${product.title}">
        </div>
      `).join('');

      carouselThumbnails.innerHTML = product.pictures.map((picture, index) => `
        <div class="thumbnail-item ${index === 0 ? 'thumb-active' : ''}" data-target="#carouselExampleControls" data-slide-to="${index}">
          <img src="${picture.url}" alt="${product.title}">
        </div>
      `).join('');

      document.querySelectorAll('.thumbnail-item').forEach(item => {
        item.addEventListener('click', function () {
          document.querySelectorAll('.thumbnail-item').forEach(thumb => thumb.classList.remove('thumb-active'));
          this.classList.add('thumb-active');
        });
      });
    }

    function displayProductSpecifications(attributes) {
      const specificationTable = document.getElementById('specificationTable');
      specificationTable.innerHTML = attributes.map(attribute => `
        <tr>
          <td><i class="bi bi-info-circle specification-icon" data-toggle="tooltip" data-placement="top" title="${attribute.name}"></i><strong>${attribute.name}:</strong></td>
          <td>${attribute.value_name}</td>
        </tr>
      `).join('');
      $('[data-toggle="tooltip"]').tooltip();
    }

    function displayProductDescription(description) {
      const container = document.getElementById('productDescription');
      const descriptionText = description.plain_text || description.text;

      container.innerHTML = `
        <p>${descriptionText}</p>
      `;
    }

    document.addEventListener('DOMContentLoaded', async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');
      if (productId) {
        const product = await fetchProductDetails(productId);
        const description = await fetchProductDescription(productId);
        displayProductDetails(product);
        displayProductDescription(description);
        displayProductSpecifications(product.attributes);
      }
    });
    async function fetchProductReviews(productId) {
      const response = await fetch(`https://api.mercadolibre.com/reviews/item/${productId}`);
      const data = await response.json();
      return data;
    }

    document.addEventListener('DOMContentLoaded', async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');
      if (productId) {
        const product = await fetchProductDetails(productId);
        const description = await fetchProductDescription(productId);
        const reviews = await fetchProductReviews(productId);
        displayProductDetails(product);
        displayProductDescription(description);
        displayProductSpecifications(product.attributes);
        displayProductReviews(reviews);
      }
    });


    async function fetchRelatedProducts(categoryId) {
      try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&limit=50`);
        const data = await response.json();
        const shuffledProducts = shuffleArray(data.results).slice(0, 8);
        displayRelatedProducts(shuffledProducts); // Função para exibir os produtos relacionados no carrossel
      } catch (error) {
        console.error('Erro ao buscar produtos relacionados:', error);
      }
    }
    
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
    function displayRelatedProducts(products) {
      const carouselInner = document.querySelector('#relatedProductCarousel .carousel-inner');
      carouselInner.innerHTML = ''; // Limpa o conteúdo atual
    
      products.forEach((product, index) => {
        const isActive = index === 0 ? 'active' : '';
        if (index % 4 === 0) {
          const carouselItem = document.createElement('div');
          carouselItem.className = `carousel-item ${isActive}`;
          const row = document.createElement('div');
          row.className = 'row';
          carouselItem.appendChild(row);
          carouselInner.appendChild(carouselItem);
        }
    
        const currentRow = carouselInner.querySelector('.carousel-item:last-child .row');
        const col = document.createElement('div');
        col.className = 'col-md-3';
    
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => {
          window.location.href = `product.html?id=${product.id}`;
        };
    
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'img-wrapper';
        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = product.thumbnail;
        img.alt = product.title;
        imgWrapper.appendChild(img);
    
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = product.title;
    
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(imgWrapper);
        card.appendChild(cardBody);
        col.appendChild(card);
        currentRow.appendChild(col);
      });
    }
    
    // Exemplo de como chamar a função dentro do evento DOMContentLoaded
    document.addEventListener('DOMContentLoaded', async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id'); // Obtém o ID do produto da URL
    
      if (productId) {
        const categoryId = await fetchProductCategoryId(productId);
        if (categoryId) {
          fetchRelatedProducts(categoryId); // Chama a função para buscar produtos relacionados
        } else {
          console.error('ID da categoria não encontrado.');
        }
      } else {
        console.error('ID do produto não encontrado na URL.');
      }
    });
    
    async function fetchProductCategoryId(productId) {
      try {
        const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
        const data = await response.json();
        return data.category_id;
      } catch (error) {
        console.error('Erro ao buscar categoria do produto:', error);
      }
    }
    
    async function fetchProducts(query) {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
      const data = await response.json();
      return data.results;
  }
  
  function createProductCard(product) {
      const card = document.createElement('div');
      card.className = 'col-md-4';
      card.innerHTML = `
          <div class="product-card" onclick="location.href='product.html?id=${product.id}'">
              <div class="icons" onclick="event.stopPropagation(); toggleLike(this)">
                  <i class="bi bi-heart"></i>
              </div>
              <img class="card-img-top" src="${product.thumbnail.replace('I.jpg', 'B.jpg')}" alt="${product.title}">
              <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <div class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                  <div class="installments">${product.installments ? `até ${product.installments.quantity}x de R$ ${product.installments.amount.toFixed(2).replace('.', ',')} com juros` : ''}</div>
                  <div class="free-shipping">${product.shipping.free_shipping ? 'Frete Grátis' : ''}</div>
              </div>
          </div>
      `;
      return card;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      const searchButton = document.getElementById('searchButton');
      const searchInput = document.getElementById('searchInput');
  
      searchButton.addEventListener('click', function() {
          const query = searchInput.value.trim();
          if (query) {
              // Redirecionar para index.html com o parâmetro de busca
              window.location.href = `/codigo/index.html?search=${encodeURIComponent(query)}`;
          }
      });
  
      searchInput.addEventListener('keypress', function(event) {
          if (event.key === 'Enter') {
              searchButton.click();
          }
      });
  
      async function performSearch() {
          const urlParams = new URLSearchParams(window.location.search);
          const searchQuery = urlParams.get('search');
          if (searchQuery) {
              const products = await fetchProducts(searchQuery);
              const productContainer = document.getElementById('productContainer');
              productContainer.innerHTML = '';
              products.forEach(product => {
                  const card = createProductCard(product);
                  productContainer.appendChild(card);
              });
          }
      }
  
      performSearch();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // JSON de exemplo com dados dos usuários
    var dadosRecuperados = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
      var usuario = JSON.stringify(dadosRecuperados);
      console.log("Usuário logado:",usuario);
      const user = document.getElementById('usuariologado');
      user.textContent = JSON.stringify(dadosRecuperados.nome);
  });

  $(document).ready(function(){
    $('#commentForm').on('submit', function(event) {
      event.preventDefault();

      // Obter os valores dos campos
      var commentText = $('#comment').val();
      var rating = $('input[name="rating"]:checked').val();

      // Validar se o usuário selecionou uma avaliação
      if (!rating) {
        alert('Por favor, selecione uma avaliação.');
        return;
      }

      // Criar o elemento de comentário
      var commentHtml = `
        <div class="card mt-3">
          <div class="card-body">
            <p class="card-text comment-text">${commentText}</p>
            <div class="static-star-rating">
              ${getStaticStarHtml(rating)}
            </div>
          </div>
        </div>
      `;

      // Adicionar o comentário à seção de comentários
      $('#commentsSection').prepend(commentHtml);

      // Limpar o formulário
      $('#commentForm')[0].reset();
    });

    // Função para gerar o HTML das estrelas estáticas
    function getStaticStarHtml(rating) {
      var starHtml = '';
      for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
          starHtml += '<span class="static-star checked">&#9733;</span>';
        } else {
          starHtml += '<span class="static-star">&#9733;</span>';
        }
      }
      return starHtml;
    }
  });