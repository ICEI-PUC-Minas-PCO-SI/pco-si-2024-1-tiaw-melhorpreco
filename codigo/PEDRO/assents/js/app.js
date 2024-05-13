const dbMock = {
  produtos: [
    {
      id: 1,
      nome: "Iphone 14",
      marca: "Apple",
      preco: 3889.00,
      idMarca: 1,
      rate: 4,
      imagem: "https://i.zst.com.br/thumbs/45/18/11/-845265318.jpg",
    },
    {
      id: 2,
      nome: "Moto G84",
      marca: "Motorola",
      preco: 1343.25,
      idMarca: 4,
      rate: 4,
      imagem: "https://i.zst.com.br/thumbs/45/32/15/-1110274597.jpg",
    },
    {
      id: 3,
      nome: "Redmi 12",
      marca: "Xiaomi",
      preco: 898.00,
      idMarca: 3,
      rate: 4,
      imagem: "https://i.zst.com.br/thumbs/45/8/3a/-1138249032.jpg",
    },
    {
      id: 4,
      nome: "Galaxy S23",
      marca: "Samsung",
      preco: 2899.00,
      idMarca: 2,
      rate: 3,
      imagem: "https://i.zst.com.br/thumbs/12/12/38/-949888442.jpg",
    },
    {
      id: 5,
      nome: "G Max 2",
      marca: "Multilaser",
      preco: 434.90,
      idMarca: 5,
      rate: 4,
      imagem: "https://i.zst.com.br/thumbs/12/12/1a/-52978684.jpg",
    },
    {
      id: 6,
      nome: "F Max 2",
      marca: "Multilaser",
      preco: 1000.00,
      idMarca: 5,
      rate: 4,
      imagem: "https://i.zst.com.br/thumbs/12/3/14/-781796560.jpg",
    },
    {
      id: 7,
      nome: "Iphone 15 Pro Max",
      marca: "Apple",
      preco: 7599.00,
      idMarca: 1,
      rate: 4,
      imagem: "https://i.zst.com.br/thumbs/45/a/13/-1114650735.jpg",
    },
    {
      id: 8,
      nome: "Moto G54",
      marca: "Motorola",
      preco: 3889.00,
      idMarca: 4,
      rate: 4,
      imagem: "https://i.zst.com.br/thumbs/12/36/39/-1119443966.jpg",
    },
  ],
  marcas: [
    { id: 1, descricao: "Apple" },
    { id: 2, descricao: "Samsung" },
    { id: 3, descricao: "Xiaomi" },
    { id: 4, descricao: "Motorola" },
    { id: 5, descricao: "Multilaser" },
  ],
};

let FILTRO_MARCA = 0;
let FILTRO_PRECO = 0;
let FILTRO_RATE = 0;
let str = "";

function exibeProdutos() {
  if (
    (FILTRO_MARCA && FILTRO_MARCA != 0) ||
    (FILTRO_PRECO && FILTRO_PRECO != 0) ||
    (FILTRO_RATE && FILTRO_RATE != 0)
  )
    str = "";

  for (let i = 0; i < dbMock.produtos.length; i++) {
    let produto = dbMock.produtos[i];
    debugger;
    if (
      ((!FILTRO_MARCA ||
      FILTRO_MARCA == 0) &&
      (!FILTRO_PRECO || FILTRO_PRECO == 0) &&
      (!FILTRO_RATE || FILTRO_RATE == 0)) || 
      ((FILTRO_MARCA == 0 || (produto.idMarca == Number(FILTRO_MARCA))) && ((FILTRO_PRECO == 0 || produto.preco >= Number(FILTRO_PRECO))) && ((FILTRO_RATE == 0 ||produto.rate >= Number(FILTRO_RATE))))
    ) {
      str += `<div class="content"
            <img class="produto" src="${produto.imagem}" alt="produto">
            <span>Smartphone ${produto.marca}</span>
            <h3>${produto.nome}</h3>
            <h6>R$${produto.preco}</h6>
            <ul>`;
      for (let j = 0; j < produto.rate; j++)
        str += `<li><i class="fa fa-star checked"></i></li>`;

      str += `</ul>
                    <button class="buy-1 button-produto">Buy Now</button>
                    </div>`;
    }
  }

  document.querySelector("#tela").innerHTML = "";
  document.querySelector("#tela").innerHTML = str;
}

document.body.onload = () => {
  let filtroMarca = document.querySelector("#filtroMarca");
  let filtroPreco = document.querySelector("#filtroPreco");
  let filtroRate = document.querySelector("#filtroRate");

  filtroMarca.addEventListener("change", () => {
    FILTRO_MARCA = filtroMarca.value;
    exibeProdutos();
  });

  filtroPreco.addEventListener("change", () => {
    FILTRO_PRECO = filtroPreco.value;
    exibeProdutos();
  });

  filtroRate.addEventListener("change", () => {
    FILTRO_RATE = filtroRate.value;
    exibeProdutos();
  });

  exibeProdutos();
};
