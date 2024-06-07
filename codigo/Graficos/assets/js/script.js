// Função para atualizar o gráfico com base no produto selecionado
function updateChart(selectedProductName, prices) {
    var chartData = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
            label: "Preço",
            data: prices,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    // Atualizar o gráfico com os novos dados
    priceChart.data = chartData;
    priceChart.update();
}

// Adicionar um ouvinte de evento para o botão "Buscar"
document.getElementById('searchButton').addEventListener('click', function() {
    var selectedProduct = productDropdown.value;
    var searchTerm = document.getElementById('searchInput').value;

    if (selectedProduct) {
        // Encontrar os preços do produto selecionado
        var selectedProductData = productsData.find(function(product) {
            return product.nome === selectedProduct;
        });

        // Verificar se o produto foi encontrado
        if (selectedProductData) {
            updateChart(selectedProduct, selectedProductData.preços);
        } else {
            alert("Produto não encontrado.");
        }
    } else {
        alert("Por favor, selecione um produto.");
    }

    console.log("Termo de pesquisa:", searchTerm);
});
