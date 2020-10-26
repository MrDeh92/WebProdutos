//carregar o módulo do express
//quando carregar módulos, faça associadoao a uma constante, para evitar a alteração de conteúdo e assim evitar
//erros de execução.

const express = require("espress");

const app = express();

//Iniciaremos os exemplos de utilizção de verbos HTTP.

//GET
//Quando o meu usuario deseja obter algum dado do servidor.

app.get("/dados", (req, res) => {
  res.send("Você está no verbo GET");
});

//POST
//Utilizado quando o meu usuário envia algo ao servidor
//com o intuito de cadastrar ou realizar autenticação

app.post("/dados", (req, res) => {
  res.send("Você está no verbo POST");
});

//PUT
//Utilizado quando o usuário deseja realizar uma atualização
//nos dados

app.put("/dados", (req, res) => {
  app.send("Você está no verbo PUT");
});

//DELETE
//Utilizado quando o usuário deseja apagar algo no banco
//de dados

app.delete("/dados", (req, res) => {
  app.send("Você está no verbo DELETE");
});

app.listen(3000);
console.log("Servidor online...");
