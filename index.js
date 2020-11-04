//carregar o módulo do express
//quando carregar módulos, faça associadoao a uma constante, para evitar a alteração de conteúdo e assim evitar
//erros de execução.

const express = require("express");

const app = express();

//O módulo body-parser nos ajuda a capturar os dados que virão no corpo de solicitalção e
//realiza a sua conversão para json. assim podemos manipular os dados
const bodyParser = require("body-parser");

//para ler o arquivo de JSOn que contem os produtos que desejo exibir
// nós iremos carregar o módulo do fs(file System)
const fs = require("fs");

// Vamos criar uma váriavel no formatode array
// que irá guardar os produtos no arquivo loja
var dadosprodutos = null;

//realizar a leitura do arquivo texto
//primeira parte é o nome do arquivo
//segunda parte é o enconding(tipo de texto-com acento)
//terceira parte é a função de callback
fs.readFile("./loja.json", "utf-8", function (err, texto) {
  if (err) throw err;
  dadosprodutos = JSON.parse(texto);
});

//Iniciaremos os exemplos de utilizção de verbos HTTP.

var layout = [
  {
    header: "Lojão Brabo de Produtos",
    navegacao: "listar,cadastrar,atualizar,deletar",
    main: "página do corpo",
    footer: "Av.João Paulo, 45, Vila Nova - São Paulo - SP",
  },
];

//GET
//Quando o meu usuario deseja obter algum dado do servidor.

app.get("/listar", (req, res) => {
  layout[0].main = dadosprodutos.produtos;
  res.send(layout);
});

//POST
//Utilizado quando o meu usuário envia algo ao servidor
//com o intuito de cadastrar ou realizar autenticação
//vamos usar o body-parser
app.use(bodyParser.json());

app.post("/cadastrar", (req, res) => {
  dadosprodutos.produtos.push(req.body);

  fs.writeFile("./loja.json", JSON.stringify(dadosprodutos), "utf-8", function (
    err
  ) {
    if (err) throw err;
    res.send("Dados Cadastrados");
  });
});

//PUT
//Utilizado quando o usuário deseja realizar uma atualização
//nos dados

app.put("/atualizar", (req, res) => {
  var idenviado = req.body.idproduto;

  //pegar a quantidade de produtos dentro do arquivo jsonv
  var qtd = dadosprodutos.produtos.length;

  for (var i = 0; i < qtd; i++) {
    if (idenviado == dadosprodutos.produtos[i].idprodutos) {
      dadosprodutos.produtos[i].nome = req.body.nome;
      dadosprodutos.produtos[i].descricao = req.body.descricao;
      dadosprodutos.produtos[i].preco = req.body.preco;
      dadosprodutos.produtos[i].imagem = req.body.imagem;
      break;
    }
  }

  fs.writeFile("./loja.json", JSON.stringify(dadosprodutos), "utf-8", function (
    err
  ) {
    if (err) throw err;
    res.send("Dados atualizados com sucesso!");
  });
});

//DELETE
//Utilizado quando o usuário deseja apagar algo no banco
//de dados

app.delete("/apagar", (req, res) => {
  var idenviado = req.body.idproduto;
  var qtd = dadosprodutos.produtos.length;
  for (var i = 0; i < qtd; i++) {
    if (idenviado == dadosprodutos.produtos[i].idprodutos) {
      dadosprodutos.produtos.splice(i, 1);
      break;
    }
  }
  fs.writeFile("./loja.json", JSON.stringify(dadosprodutos), "utf-8", function (
    err
  ) {
    if (err) throw err;
    res.send("Podruto apagado.");
  });
});

app.listen(3000);
console.log("Servidor online...");
