# Projeto de Desafio: Cadastro de Conta

Este projeto foi desenvolvido em resposta às Questões 2 a 4 do desafio, que envolvem a criação de uma tela de cadastro de conta semelhante à do Google, a validação dos campos digitados pelo usuário em JavaScript e a implementação de um backend REST em Node.js.

## Passos Seguidos no Desenvolvimento

### Questão 2: Criação da Tela de Cadastro

Para atender à Questão 2, foi desenvolvido o código HTML e CSS correspondente à tela de cadastro, utilizando a biblioteca Bootstrap. A tela inclui a logo do Google e uma imagem à direita. O código pode ser encontrado nos arquivos `index.html` e `style.css`.

### Questão 3: Validação de Campos e Obtenção de Dados

Na Questão 3, foi escrito o código JavaScript para obter todos os campos digitados pelo usuário e validar se foram preenchidos corretamente. A validação inclui a verificação de correspondência entre a senha e sua confirmação. Em caso de falha na validação, uma mensagem é emitida ao usuário. O código JavaScript pode ser encontrado no arquivo `script.js`.

### Questão 4: Implementação do Backend REST

Para atender à Questão 4, foi implementado o backend REST em Node.js, utilizando o framework Express.js. O backend recebe os dados de cadastro de conta no endpoint `/conta/cadastrar`, imprime os dados recebidos e responde com uma mensagem de confirmação com status 201 e texto "Conta cadastrada". O código do backend pode ser encontrado no arquivo `server.js`.

## Execução do Projeto

Para executar o projeto:

1. Clone este repositório.
2. Abra o arquivo `index.html` em um navegador para visualizar a tela de cadastro.
3. Certifique-se de ter o Node.js instalado e execute o backend com o comando `node server.js`.
4. Preencha os campos de cadastro na tela e clique em "Enviar".
5. Verifique no console do Node.js a impressão dos dados recebidos pelo backend e a confirmação de cadastro.

Este projeto visa demonstrar a implementação de uma tela de cadastro de conta, a validação de campos em JavaScript e a criação de um backend REST em Node.js, em resposta às Questões 2 a 4 do desafio proposto.
