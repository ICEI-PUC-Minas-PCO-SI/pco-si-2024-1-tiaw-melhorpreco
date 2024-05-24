const express = require('express');
const app = express();

//Indica onde está os arquivos estáticos
app.use(express.static(path.join(__dirname,'public')));

app.use('/test',async (req, res) =>{
    // Aqui vai o script desta rota
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`servidor ativo na porta ${PORT} - http://localhost:${PORT}`);
});