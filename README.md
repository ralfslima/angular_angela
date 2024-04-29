# Funcionamento do projeto

### 1º Abra o Visual Studio Code e selecione a pasta back-end. Em seguida utilize o comando npm i para baixar as dependências e depois digite no terminal: npx json-server api.json. Agora você terá uma API falsa executando nos seguintes endereços:
- localhost:3000/pessoas
- localhost:3000/contas

### 2º Abra outro Visual Studio Code e selecione a pasta front-end. Em seguida utilize o comando npm i para baixar as dependências do projeto, por fim execute o comando: ng s

### Observações: A estrutura de login deverá ser alterada, pois a API falsa não consegue simular um login verdadeiro, o correto é enviar os dados da pessoa para a API e a API retornar se é um usuário válido ou não, ali estou puxando todos os dados da API e armazenando em um vetor, funciona mas não é o mais indicado.