document.addEventListener('DOMContentLoaded', function() {
  // JSON de exemplo com dados dos usuários
  const usuarios = [
    {
      id: 1,
      nome: 'João Silva',
      username: 'joaosilva',
      email: 'joao.silva@example.com',
      senha: 'senhaCriptografada123'
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      username: 'mariaoliveira',
      email: 'maria.oliveira@example.com',
      senha: 'outraSenhaCriptografada456'
    }
  ];

  // Função para verificar e carregar o estado de login
  function carregarEstadoLogin() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (usuarioLogado) {
      atualizarInterfaceUsuario(usuarioLogado);
    }
  }

  // Função para validar o login
  function validarLogin(username, password) {
    return usuarios.find(usuario => usuario.username === username && usuario.senha === password);
  }

  // Função para atualizar a interface após login
  function atualizarInterfaceUsuario(usuario) {
    const loginBtn = document.getElementById('loginBtn');
    const userDropdown = document.getElementById('userDropdown');
    const userName = document.getElementById('userName');

    loginBtn.classList.add('d-none');
    userDropdown.classList.remove('d-none');
    userName.textContent = usuario.nome;

    document.getElementById('logoutBtn').addEventListener('click', logout);
  }

  // Função de logout
  function logout() {
    localStorage.removeItem('usuarioLogado');
    location.reload();
  }

  // Event listener para o formulário de login
  document.querySelector('.login-modal form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usuario = validarLogin(username, password);
    if (usuario) {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      atualizarInterfaceUsuario(usuario);
      document.getElementById('loginContainer').style.display = 'none';
    } else {
      alert('Nome de usuário ou senha incorretos.');
    }
  });

  // Inicializar estado de login
  carregarEstadoLogin();

  // Event listeners para abrir e fechar o modal de login
  document.getElementById('loginBtn').addEventListener('click', function() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuarioLogado) {
      document.getElementById('loginContainer').style.display = 'flex';
    }
  });

  document.getElementById('loginContainer').addEventListener('click', function(event) {
    if (event.target === this) {
      this.style.display = 'none';
    }
  });

  document.getElementById('forgotPassword').addEventListener('click', function() {
    $('#forgotPasswordModal').modal('show');
    document.getElementById('loginContainer').style.display = 'none';
  });

  document.getElementById('register').addEventListener('click', function() {
    $('#registerModal').modal('show');
    document.getElementById('loginContainer').style.display = 'none';
  });
});

document.getElementById('loginBtn').addEventListener('click', function () {
  document.getElementById('loginContainer').style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

document.getElementById('loginContainer').addEventListener('click', function (event) {
  if (event.target === this) {
    this.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  localStorage.setItem('usuarioLogado', JSON.stringify({ username }));
  document.getElementById('loginContainer').style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore background scrolling
  updateUserInfo();
});

document.getElementById('logoutBtn').addEventListener('click', function () {
  localStorage.removeItem('usuarioLogado');
  updateUserInfo();
});

function updateUserInfo() {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (usuarioLogado) {
    document.getElementById('userName').textContent = usuarioLogado.username;
    document.getElementById('loginBtn').classList.add('d-none');
    document.getElementById('userDropdown').classList.remove('d-none');
  } else {
    document.getElementById('loginBtn').classList.remove('d-none');
    document.getElementById('userDropdown').classList.add('d-none');
  }
}

updateUserInfo();

document.getElementById('forgotPassword').addEventListener('click', function () {
  showModal('forgotPasswordModal');
});

document.getElementById('register').addEventListener('click', function () {
  showModal('registerModal');
});

function showModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Link para recuperação de senha enviado para seu email.');
  closeModal('forgotPasswordModal');
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Novo usuário registrado com sucesso.');
  closeModal('registerModal');
});

function toggleLike(icon) {
  icon.querySelector('i').classList.toggle('bi-heart');
  icon.querySelector('i').classList.toggle('bi-heart-fill');
  icon.querySelector('i').classList.toggle('liked');
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

document.getElementById('searchButton').addEventListener('click', async function () {
  const query = document.getElementById('searchInput').value;
  const products = await fetchProducts(query);
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';
  products.forEach(product => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
  });
});
