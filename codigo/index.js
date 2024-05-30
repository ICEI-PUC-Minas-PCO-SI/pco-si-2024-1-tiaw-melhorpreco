const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

//Indica onde está os arquivos estáticos
app.use(express.static(path.join(__dirname,'Pedro')));

app.post('/test',async (req, res) =>{
    // Variaveis que vamos precisar enviar à API do MELI
    const app_id = "6601762389710091";
    const client_secret = "w7pWXJCPPR9swx7sbGThxOSQYeh891Qo";
    const code = "TG-665884d8abb3b10001a2ec6a-174492932";
    const redirect_uri = "https://www.google.com.br";

    // URL principal da API do MELI - para obter o Access Token
    const url_principal = "https://api.mercadolibre.com/oauth/token";

    //Informações que vão ser enviadas junto da URL principal da requisição/chamada
    const headers = {
        "accept": "application/json",
        "content-type": "application/x-www-form-urlencoded"
    };

    const dados = `grant_type=authorization_code&client_id=${app_id}&client_secret=${client_secret}&code=${code}&redirect_uri=${redirect_uri}`;

    const resposta = await fetch(url_principal,{
        method: 'POST',
        headers: headers,
        body: dados
    });

    const resposta_json = await resposta.json();

    console.log(resposta_json);

    res.send("ok");


});

app.post('/getAccessToken',async (req, res) =>{
    // Variaveis que vamos precisar enviar à API do MELI
    const app_id = "6601762389710091";
    const client_secret = "w7pWXJCPPR9swx7sbGThxOSQYeh891Qo";
    const code = "TG-665884d8abb3b10001a2ec6a-174492932";
    const refresh_token = "TG-6658894ccff56c00019ec1a6-174492932";

    // URL principal da API do MELI - para obter o Access Token
    const url_principal = "https://api.mercadolibre.com/oauth/token";

    //Informações que vão ser enviadas junto da URL principal da requisição/chamada
    const headers = {
        "accept": "application/json",
        "content-type": "application/x-www-form-urlencoded"
    };

    const dados = `grant_type=refresh_token&client_id=${app_id}&client_secret=${client_secret}&code=${code}&refresh_token=${refresh_token}`;

    const resposta = await fetch(url_principal,{
        method: 'POST',
        headers: headers,
        body: dados
    });

    const resposta_json = await resposta.json();

    console.log(resposta_json);

    res.send("ok");


});

const fs = require('fs');

app.get('/getIten',async (req, res) =>{
    // Variaveis que vamos precisar enviar à API do MELI
    const access_token = "APP_USR-6601762389710091-053010-98a094327540baf2151693a1e1934527-174492932";

    
    const buscaDigitada = "motorola"; // Busca o parâmetro de busca na query da URL

     //Informações que vão ser enviadas junto da URL principal da requisição/chamada
     const headers = {
        "Authorization": `Bearer ${access_token}` 
     };
    
    // URL principal da API do MELI 
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${buscaDigitada}`;

   
    const resposta = await fetch(url,{
        method: 'GET',
        headers: headers,
    });

    const resposta_json = await resposta.json();

       // Apagando o conteúdo do arquivo JSON antes de gravar os novos dados
       fs.truncate('../codigo/assets/json/db.json', 0, async (err) => {
        if (err) throw err;
        
        // Gravando no arquivo JSON
        fs.writeFile('../codigo/assets/json/db.json', JSON.stringify(resposta_json, null, 4), (err) => {
            if (err) throw err;
            console.log('Dados gravados no arquivo db.json');
        });
    });

    res.send(resposta_json); 

});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`servidor ativo na porta ${PORT} - http://localhost:${PORT}`);
});