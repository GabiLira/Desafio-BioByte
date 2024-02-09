// Função para mostrar/ocultar senhas
function show() {
  // Obtém os elementos de senha pelos seus IDs
  var x = document.getElementById("pass1");
  var y = document.getElementById("pass2");

  // Verifica se ambos os campos são de tipo "password"
  if (x.type === "password" && y.type === "password") {
    // Se forem, altera para tipo "text" para mostrar as senhas
    x.type = "text";
    y.type = "text";
  } else {
    // Se não, altera de volta para tipo "password" para ocultar as senhas
    x.type = "password";
    y.type = "password";
  }
}

// Adiciona um ouvinte de evento para o envio do formulário
document.querySelector("form").addEventListener("submit", function(event) {
  // Impede o envio do formulário padrão
  event.preventDefault();

  // Obtém os valores dos campos do formulário e remove espaços em branco
  var nome = document.querySelector("input[type=nome]").value.trim();
  var sobrenome = document.querySelectorAll("input[type=nome]")[1].value.trim();
  var usuario = document.querySelector("input[type=usuario]").value.trim();
  var senha = document.getElementById("pass1").value;
  var confirmarSenha = document.getElementById("pass2").value;

  // Verifica se algum campo obrigatório está vazio
  if (!nome || !sobrenome || !usuario || !senha || !confirmarSenha) {
    // Se estiver, exibe uma mensagem de erro
    var errorMessage = document.createElement('div');
    errorMessage.textContent = "Por favor, preencha todos os campos.";
    errorMessage.classList.add('prevention-message');
    document.body.appendChild(errorMessage);
    return;
  }

  // Verifica se a senha atende aos critérios de segurança
  if (senha.length < 8 || !/[a-zA-Z]/.test(senha) || !/\d/.test(senha) || !/[^a-zA-Z0-9]/.test(senha)) {
    // Se não atender, exibe uma mensagem de erro
    var errorMessage = document.createElement('div');
    errorMessage.textContent = "A senha deve ter 8 ou mais caracteres, incluindo letras, números e caracteres especiais.";
    errorMessage.classList.add('prevention-message');
    document.body.appendChild(errorMessage);
    return;
  }

  // Verifica se a senha e a confirmação de senha coincidem
  if (senha !== confirmarSenha) {
    // Se não coincidirem, exibe uma mensagem de erro
    var errorMessage = document.createElement('div');
    errorMessage.textContent = "A senha e a confirmação de senha não correspondem.";
    errorMessage.classList.add('prevention-message');
    document.body.appendChild(errorMessage);
    return;
  }

  // Constrói um objeto com os dados do formulário
  var formData = {
    nome: nome,
    sobrenome: sobrenome,
    usuario: usuario,
    senha: senha,
    confirmarSenha: confirmarSenha
  };

  // Envia os dados para o backend via fetch
  fetch('/conta/cadastrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    // Lida com a resposta do servidor
    if (response.status === 201) {
      console.log('Conta cadastrada com sucesso');
    } else {
      console.error('Erro ao cadastrar conta');
    }
  })
  .catch(error => {
    // Lida com erros durante o processo de solicitação
    console.error('Erro ao processar a solicitação:', error);
  });
});