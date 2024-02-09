# Projeto de Integração entre Sistema de Análise de Cirurgias e Sistema de Gestão Hospitalar

Este projeto foi desenvolvido em resposta à Questão 8, teste de integração de sistemas, que apresenta o desafio de integrar o sistema de análise de cirurgias de pacientes de um hospital com o sistema de gestão hospitalar, visando eliminar o processo de cadastro manual.

## Descrição do Problema

O sistema de análise de cirurgias recebe dados do paciente e de suas cirurgias através de digitação manual, o que é um processo moroso e suscetível a erros. Para resolver esse problema, foi solicitada a criação de uma solução de integração entre o sistema de análise de cirurgias e o sistema de gestão hospitalar, que armazena todos os dados do paciente e suas cirurgias.

### Restrições e Desafios

- O acesso ao banco de dados do sistema de gestão hospitalar é concedido exclusivamente a partir de uma máquina do hospital, acessada por SSH.
- O sistema de análise de cirurgias está hospedado em nuvem e seu banco de dados não possui acesso externo.
- A solução deve garantir segurança, completude e ausência de redundância nos dados enviados ao sistema de análise.

