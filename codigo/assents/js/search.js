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

    // Função para extrair o parâmetro de busca da URL e realizar a busca
    async function performSearch() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        if (searchQuery) {
            // Chame a função para buscar produtos e exibi-los
            const products = await fetchProducts(searchQuery);
            displayProducts(products);
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

    function displayProducts(products) {
        const productContainer = document.getElementById('productContainer');
        productContainer.innerHTML = '';
        products.forEach(product => {
            const card = createProductCard(product);
            productContainer.appendChild(card);
        });
    }

    performSearch();
});
