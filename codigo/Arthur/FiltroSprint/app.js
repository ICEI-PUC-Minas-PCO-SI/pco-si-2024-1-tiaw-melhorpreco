// Definição do objeto JSON com os produtos e filtros
const dbMock = {
    produtos: [
        { id: 1, nome: "Iphone 14", imagem: 'iphone.jpg', descricao:  "Apple iPhone 14 128GB Meia-noite", preco: "R$ 3.869,00",  linkloja: "https://www.casasbahia.com.br/apple-iphone-14-128gb-meia-noite-55058313/p/55058313?utm_medium=Cpc&utm_source=GP_PLA&IdSku=55058313&idLojista=10037&tipoLojista=1P&gclsrc=aw.ds&&utm_campaign=gg_pmax_core_tele_apple&gad_source=1&gclid=Cj0KCQjwsPCyBhD4ARIsAPaaRf1OmPd65efOwYFeCRhh6UaHT9W20-WKJ40cJ1UD62OLF5XfwTjo6AEaAmeiEALw_wcB", filtro: "Visitado", idfiltro: 2},
        { id: 2, nome: "Echo Dot 5ª geração", imagem: 'Alexa.jpg', descricao: " Echo Dot com o melhor som já lançado | Cor Preta", preco: "R$ 386,10", linkloja: "https://www.amazon.com.br/Echo-Dot-5%C2%AA-gera%C3%A7%C3%A3o-Cor-Preta/dp/B09B8VGCR8/ref=asc_df_B09B8VGCR8/?tag=googleshopp00-20&linkCode=df0&hvadid=659299489578&hvpos=&hvnetw=g&hvrand=13597146640594623639&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031586&hvtargid=pla-2088602433721&psc=1&mcid=4214a3a0d0603c599772bacbf854bb31",  filtro: "Vendido", idfiltro: 1},
        { id: 3, nome: "Relogio", imagem: 'imagemrelogio.jpg', descricao:  "Relógio Masculino Preto resistente à àgua, Ultra Fino", preco: "R$ 74,81",  linkloja: "https://www.amazon.com.br/Masculino-Resistente-Minimalista-Inoxid%C3%A1vel-Original/dp/B0CNV3YV9W/ref=asc_df_B0CNV3YV9W/?tag=googleshopp00-20&linkCode=df0&hvadid=647517491015&hvpos=&hvnetw=g&hvrand=16723146022360540722&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031586&hvtargid=pla-2331233104997&psc=1&mcid=035541fdc7da3822a360c19d491a4903", filtro: "Curtido", idfiltro: 3},
        { id: 4, nome: "Price of Persia", imagem: 'jogo.jpg', descricao: "Jogo The Prince Of Persia The Lost Crown - Ps5", preco:"R$270,00", linkloja: "https://www.carrefour.com.br/jogo-the-prince-of-persia-the-lost-crown-ps5-mp936004452/p", filtro: "Visitado", idfiltro: 2},
        { id: 5, nome: "Fone Bluetooth", imagem: 'Fone.png', descricao: "Fone de Ouvido bluetooth Motorola Azul", preco: "R$ 170,05", linkloja: "https://www.motorola.com.br/fone-de-ouvido-bluetooth-moto-buds-250/p?idsku=1433&gad_source=1&gclid=Cj0KCQjwsPCyBhD4ARIsAPaaRf3i8wetHOMZNsOMeJbgk_xFXfFwJkYgCCWvs949m-DoezC5zBuiLg0aAmP4EALw_wcB",  filtro: "Vendido", idfiltro: 1},
        { id: 6, nome: "Tv Philco", imagem: 'televisao.jpg', descricao: "Smart Tv Philco 32 polegadas", preco: "R$ 859,00", linkloja: "https://www.carrefour.com.br/smart-tv-philco-32-ptv32g7pr2csblh-roku-tv-dolby-audio-led-bivolt-3026469/p?utm_medium=sem&utm_source=google_pmax_1p&utm_campaign=1p_performancemax_Eletro_TV&gad_source=1&gclid=Cj0KCQjwsPCyBhD4ARIsAPaaRf2ThMj5nCt1SA6Ifkl3N-tYP1Ip9tEOsFonPZv9-0DtGX76R6UIigEaAp8BEALw_wcB", filtro: "Vendido", idfiltro: 1},
        { id: 7, nome: "Playstation 5", imagem: 'Play5.jpg', descricao:  "Console Ps5 Sony Standard 825Gb Ssd", preco: "R$ 3.699,90 ",  linkloja: "https://www.carrefour.com.br/console-playstation-5-sony-standard-825gb-ssd-3117731/p?utm_medium=sem&utm_source=google_pmax_1p&utm_campaign=1p_performancemax_eletro_console&gad_source=4&gclid=Cj0KCQjwsPCyBhD4ARIsAPaaRf05XK5nNoRqEsnG8LOpCrX0xDkJcSrLCziCH9QC35lbiFXBu-NCN0gaAhh9EALw_wcB", filtro: "Visitado", idfiltro: 2},
        { id: 8, nome: "Notebook Lenovo", imagem: 'Note.jpg', descricao: "Lenovo V14 14 Intel: A Combinação Perfeita de Estilo e Desempenho", preco: "R$ 3.695,99", linkloja: "https://www.lenovo.com/br/pt/p/laptops/lenovo-laptops/v-series/lenovo-v14-g3-iap(brazil)/82ul0018br?cid=br:sem|se|google|j-b2c-commercial_notebook-convers-google-performancemax-intelccf|||82UL0018BR|18004393355|||pmax||commercial&gad_source=1&gclid=Cj0KCQjwsPCyBhD4ARIsAPaaRf0_QRtsxb6sm8AROjznFBhDuDQ3Jt_9emPkOYzG0ZtclibL7Y1vnuYaAtj3EALw_wcB", filtro: "Vendido", idfiltro: 2},
        {id: 9, nome: "Fone Gamer", imagem: 'fonegamer.jpg', descricao: "Headset Gamer Wireless Black rgb Havit H2015G", preco: "R$ 451,45", linkloja: "https://www.americanas.com.br/produto/6824250598/headset-gamer-wireless-black-rgb-havit-h2015g?opn=YSMESP&offerId=639cc010401db3b86b0dd6a6&srsltid=AfmBOooXx7Q8h1OYm8KSd0ybiVxIdCIzJ8VT4eBKXpRokiezGEp1rKNCVnE",  filtro: "Vendido", idfiltro: 3},
    ],

    filtros: [
        { id: 1, filtro: 'Mais Vendidos' },
        { id: 2, filtro: 'Mais Visitados' },
        { id: 3, filtro: 'Mais Curtidos' }
    ]
};

// Variável global para armazenar o filtro selecionado
let FILTRO_PRODUTO = 0;

// Função para exibir os produtos de acordo com o filtro selecionado
function exibeProdutos() {
    let str = '';
    let produtosFiltrados = [];

    // Filtra os produtos de acordo com o filtro selecionado
    for (let i = 0; i < dbMock.produtos.length; i++) {
        const produto = dbMock.produtos[i];
        if (FILTRO_PRODUTO === 0 || produto.idfiltro === FILTRO_PRODUTO) {
            produtosFiltrados.push(produto);
        }
    }

    // Monta a string com os cards dos produtos filtrados
    for (let i = 0; i < produtosFiltrados.length; i++) {
        const produto = produtosFiltrados[i];
        str += `<div class="card col-md-4" style="width: 18rem;">
                    <img src="imagem/${produto.imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">${produto.descricao}</p>
                        <p class="card-text text-success">${produto.preco}</p>
                        <a href="${produto.linkloja}" class="btn btn-warning">Ver na loja</a>
                    </div>
                </div>`;
    }

    // Insere os cards na div com o id "tela"
    document.querySelector('#tela').innerHTML = str;
}

// Função executada quando o corpo do documento é carregado
document.body.onload = () => {
    let filtroProduto = document.querySelector('#filtroProduto');
    
    // Adiciona um ouvinte de evento para o evento change no filtro
    filtroProduto.addEventListener('change', () => {
        FILTRO_PRODUTO = parseInt(filtroProduto.value);
        exibeProdutos();
    });

    // Exibe os produtos ao carregar a página
    exibeProdutos();
};

document.addEventListener('DOMContentLoaded', () => {
    // Variável para armazenar os produtos filtrados
    let produtosFiltrados = [];

    // Função para exibir os produtos de acordo com os filtros selecionados
    function exibeProdutos() {
        let str = '';
        // Verifica se há produtos filtrados para exibição
        if (produtosFiltrados.length > 0) {
            produtosFiltrados.forEach(produto => {
                str += `<div class="card col-md-4" style="width: 18rem;">
                            <img src="imagem/${produto.imagem}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${produto.nome}</h5>
                                <p class="card-text">${produto.descricao}</p>
                                <p class="card-text text-success">${produto.preco}</p>
                                <a href="${produto.linkloja}" class="btn btn-warning">Ver na loja</a>
                            </div>
                        </div>`;
            });
        } else {
            // Caso não haja produtos filtrados, exibe mensagem de alerta
            str = '<div class="alert alert-warning" role="alert">Nenhum produto encontrado.</div>';
        }
        // Insere os cards na div com o id "tela"
        document.querySelector('#tela').innerHTML = str;
    }

    // Função para filtrar os produtos com base no termo de busca
    function filtrarProdutos(termo) {
        produtosFiltrados = dbMock.produtos.filter(produto => produto.nome.toLowerCase().includes(termo.toLowerCase()));
        exibeProdutos();
    }

    // Evento de clique no botão de busca
    document.querySelector('#btnBuscar').addEventListener('click', () => {
        const termoBusca = document.querySelector('#inputBusca').value.trim();
        if (termoBusca !== '') {
            filtrarProdutos(termoBusca);
        } else {
            alert('Por favor, insira um termo de busca válido.');
        }
    });

    // Evento de digitação na barra de busca
    document.querySelector('#inputBusca').addEventListener('input', () => {
        const termoBusca = document.querySelector('#inputBusca').value.trim();
        if (termoBusca !== '') {
            filtrarProdutos(termoBusca);
        } else {
            // Se a barra de busca estiver vazia, exibe todos os produtos
            produtosFiltrados = dbMock.produtos;
            exibeProdutos();
        }
    });

    // Função para exibir os produtos ao carregar a página
    exibeProdutos();
});

