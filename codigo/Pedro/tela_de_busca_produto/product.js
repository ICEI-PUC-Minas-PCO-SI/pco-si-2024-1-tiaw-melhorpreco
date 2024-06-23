
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

    function displayProductReviews(reviews) {
      const reviewsContainer = document.getElementById('reviewsContainer');
      if (reviews.reviews.length === 0) {
        reviewsContainer.innerHTML = '<p>Este produto ainda não possui avaliações.</p>';
      } else {
        reviewsContainer.innerHTML = reviews.reviews.map(review => `
          <div class="review">
            <strong>${review.title}</strong>
            <p>${review.content}</p>
            <div class="review-rating">
              ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
            </div>
            <p><small>Por ${review.reviewer.name} em ${new Date(review.date).toLocaleDateString()}</small></p>
            <hr>
          </div>
        `).join('');
      }
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
