document.addEventListener('DOMContentLoaded', function() {
    const wishlistContainer = document.getElementById('wishlistContainer');
    var dadosRecuperados = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
  
    if (!dadosRecuperados || !dadosRecuperados.id) {
      window.location.href = 'login.html';
      return;
    }
  
    var userId = dadosRecuperados.id;
    var userWishes = JSON.parse(localStorage.getItem('userWishes')) || {};
  
    if (!userWishes[userId] || userWishes[userId].length === 0) {
      wishlistContainer.innerHTML = '<p>Sua lista de desejos está vazia.</p>';
      return;
    }
  
    userWishes[userId].forEach(productId => {
      fetchProductDetails(productId).then(product => {
        const card = createProductCard(product);
        wishlistContainer.appendChild(card);
      });
    });
  });
  
  async function fetchProductDetails(productId) {
    const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
    const product = await response.json();
    return product;
  }
  
  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
      <div class="product-card">
        <div class="icons" onclick="event.stopPropagation(); removeFromWishlist('${product.id}')">
          <i class="bi bi-heart-fill"></i>
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
  
  function removeFromWishlist(productId) {
    var dadosRecuperados = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
    var userId = dadosRecuperados.id;
    var userWishes = JSON.parse(localStorage.getItem('userWishes')) || {};
  
    if (userWishes[userId]) {
      const index = userWishes[userId].indexOf(productId);
      if (index !== -1) {
        userWishes[userId].splice(index, 1);
        localStorage.setItem('userWishes', JSON.stringify(userWishes));
        location.reload(); // Atualiza a página para refletir a remoção
      }
    }
  }
  