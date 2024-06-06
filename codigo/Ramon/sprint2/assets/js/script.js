// Seleciona todos os elementos de estrela
let estrelas = document.querySelectorAll('.estrela');

// Adiciona evento de clique a cada estrela
estrelas.forEach(function(estrela, index) {
  estrela.addEventListener('click', function() {
    // Armazena a avaliação no localStorage
    localStorage.setItem('avaliacao', index + 1);

    // Atualiza a exibição das estrelas
    estrelas.forEach(function(est, i) {
      est.textContent = i <= index ? '★' : '☆';
    });
  });
});

// Seleciona os botões de recomendação
let btnSim = document.getElementById('Sim-btn');
let btnNao = document.getElementById('Não-btn');

// Adiciona eventos de clique aos botões de recomendação
btnSim.addEventListener('click', function() {
  localStorage.setItem('recomendacao', 'Sim');
  alert('Obrigado pela sua avaliação!');
});

btnNao.addEventListener('click', function() {
  localStorage.setItem('recomendacao', 'Não');
  alert('Obrigado pela sua avaliação!');
});

// Seleciona o botão de envio
let btnEnviar = document.getElementById('submit-btn');

// Adiciona evento de clique ao botão de envio
btnEnviar.addEventListener('click', function() {
  let avaliacao = localStorage.getItem('avaliacao');
  let recomendacao = localStorage.getItem('recomendacao');
  let review = document.getElementById('review').value;

  // Cria um objeto JSON com os dados da avaliação
  let dadosAvaliacao = {
    avaliacao: avaliacao,
    recomendacao: recomendacao,
    review: review
  };

  // Converte o objeto em uma string JSON e armazena no localStorage
  localStorage.setItem('dadosAvaliacao', JSON.stringify(dadosAvaliacao));

  alert('Avaliação enviada com sucesso!');
});
