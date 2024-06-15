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
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (!usuarioLogado) {
    document.getElementById('loginContainer').style.display = 'flex';
  }
});

document.getElementById('loginContainer').addEventListener('click', function (event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});

document.getElementById('forgotPassword').addEventListener('click', function () {
  $('#forgotPasswordModal').modal('show');
  document.getElementById('loginContainer').style.display = 'none';
});

document.getElementById('register').addEventListener('click', function () {
  $('#registerModal').modal('show');
  document.getElementById('loginContainer').style.display = 'none';
});