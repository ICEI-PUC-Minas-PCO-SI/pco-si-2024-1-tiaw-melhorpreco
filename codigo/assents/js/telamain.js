async function fetchProducts(query, limit = 4) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}&limit=${limit}`);
  const data = await response.json();
  return data.results;
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'col-md-3';
  card.innerHTML = `
    <div class="product-card" onclick="location.href='${product.permalink}'">
      <div class="icons" onclick="event.stopPropagation(); toggleLike(this)">
        <i class="bi bi-heart"></i>
      </div>
      <img class="card-img-top" src="${product.thumbnail.replace('I.jpg', 'B.jpg')}" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <div class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
        <div class="installments">${product.installments ? `até ${product.installments.quantity}x de R$ ${product.installments.amount.toFixed(2).replace('.', ',')} com juros` : ''}</div>
        <div class="free-22shipping">${product.shipping.free_shipping ? 'Frete Grátis' : ''}</div>
      </div>
    </div>
  `;
  return card;
}

async function loadCarouselProducts(query, containerId) {
  const products = await fetchProducts(query);
  const productContainer = document.getElementById(containerId);
  productContainer.innerHTML = '';
  products.forEach(product => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  loadCarouselProducts('oferta', 'offerProductContainer');
  loadCarouselProducts('smartphone', 'smartphoneProductContainer');
  loadCarouselProducts('eletrodomestico', 'applianceProductContainer');
});




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