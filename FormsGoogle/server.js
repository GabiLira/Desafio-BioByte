// Importando as dependências
const express = require('express'); // Importa o framework Express
const bodyParser = require('body-parser'); // Middleware para analisar corpos de solicitação JSON

// Inicializando o aplicativo Express
const app = express(); // Cria uma instância do aplicativo Express
const PORT = 3000; // Define a porta em que o servidor irá rodar

// Middleware para analisar corpos de solicitação JSON
app.use(bodyParser.json());

// Rota para lidar com o cadastro de conta
app.post('/conta/cadastrar', (req, res) => {
  // Extrai os dados enviados no corpo da requisição
  const { nome, sobrenome, usuario, senha, confirmarSenha } = req.body;

  // Verifica se todos os campos necessários estão presentes
  if (!nome || !sobrenome || !usuario || !senha || !confirmarSenha) {
    // Retorna um erro com status 400 se algum campo estiver ausente
    return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
  }

  // Verifica se a senha e a confirmação de senha correspondem
  if (senha !== confirmarSenha) {
    // Retorna um erro com status 400 se as senhas não coincidirem
    return res.status(400).json({ error: 'A senha e a confirmação de senha não correspondem.' });
  }

  // Retorna uma mensagem de sucesso com status 201 se o cadastro for bem-sucedido
  return res.status(201).json({ message: 'Conta cadastrada.' });
});

// Inicia o servidor
app.listen(PORT, () => {
  // Imprime uma mensagem indicando que o servidor está rodando e em qual porta
  console.log(`Servidor rodando na porta ${PORT}`);
});