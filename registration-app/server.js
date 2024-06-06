const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Middleware para servir arquivos estáticos (HTML)
app.use(express.static('public'));

// Endpoint GET para renderizar o formulário
app.get('/registration', (req, res) => {
    res.sendFile(__dirname + '/public/registration.html');
});

// Endpoint POST para receber os dados do formulário
app.post('/registration', (req, res) => {
    const { name, email, password } = req.body;

    // Validação básica dos campos
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    // Simulação de resposta de sucesso
    res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
