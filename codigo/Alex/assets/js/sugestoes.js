function lerInfos() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            formulario: [
                ]
        }
    }

    return objDados;
}

function salvarInfos(dados) {
    localStorage.setItem ('db', JSON.stringify(dados));
}

function confirmacao() {
    // Lendo os dados do localStorage
    let objDados = lerInfos();

    // Registro da sugestão/reclamação
    let strNome = document.getElementById('texto1').value;
    let strEmail = document.getElementById('texto2').value;
    let strMensagem = document.getElementById('texto3').value;
    let novoRegistro = {
        nome: strNome,
        email: strEmail,
        mensagem: strMensagem
    };
    objDados.formulario.push(novoRegistro);

    // Salvando no localStorage novamente
    salvarInfos(objDados);
    if (strNome.length <= 0) {
        alert("Não foi possível enviar! Tente novamente!");
        return;
    }
    if (strEmail.length <= 0) {
        alert("Não foi possível enviar! Tente novamente!");
        return;
    }
    if (strMensagem.length <= 0) {
        alert("Não foi possível enviar! Tente novamente!");
        return;
    }
    alert("Sua sugestão/reclamação foi registrada com sucesso!");
    
}

document.getElementById ('envio').addEventListener ('click', confirmacao)