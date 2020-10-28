//carregar o módulo do express
//quando carregar módulos, faça associadoao a uma constante, para evitar a alteração de conteúdo e assim evitar
//erros de execução.

const express = require("express");

const app = express();

//O módulo body-parser nos ajuda a capturar os dados que virão no corpo de solicitalção e
//realiza a sua conversão para json. assim podemos manipular os dados
const bodyParser = require("body-parser");

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
  layout[0].main = [
    {
      nome: "Calça",
      descrição: "Jeans Feminina",
      preço: "R$ 150",
      imagem:
        "https://cea.vteximg.com.br/arquivos/ids/10817625/Calca-Jeans-Feminina-Sawary-Super-Skinny-com-Rasgos-Azul-Escuro-9619276-Azul_Escuro_1.jpg?v=637085005993530000",
    },
    {
      nome: "Blusa",
      descrição: "Ace One Piece -Preta",
      preço: "R$ 50",
      imagem:
        "https://i3.wp.com/ae01.alicdn.com/kf/HTB1.t1zbUGF3KVjSZFoq6zmpFXaU/Camisa-da-forma-T-100-Algod%C3%A3o-PULAR-50th-One-Piece-Ace-obrigado-por-me-amar-Jap%C3%A3o.jpg",
    },
    {
      nome: "Tênis",
      descrição: "Nike",
      preço: "R$ 500",
      imagem:
        "https://cdn.iset.io/assets/50315/produtos/4133/tenis-nike-sb-chron-slr-preto-cd6278-002.jpg",
    },
    {
      nome: "Jaqueta",
      descrição: "Couro - Marrom",
      preço: "R$ 350",
      imagem:
        "https://cdn.awsli.com.br/800x800/4/4061/produto/18847911/e8476d14c1.jpg",
    },
  ];
  res.send(layout);
});

//POST
//Utilizado quando o meu usuário envia algo ao servidor
//com o intuito de cadastrar ou realizar autenticação
//vamos usar o body-parser
app.use(bodyParser.json());
app.post("/dados", (req, res) => {
  res.send(req.body);
});

//PUT
//Utilizado quando o usuário deseja realizar uma atualização
//nos dados

app.put("/dados", (req, res) => {
  res.send("Você está no verbo PUT");
});

//DELETE
//Utilizado quando o usuário deseja apagar algo no banco
//de dados

app.delete("/dados", (req, res) => {
  res.send("Você está no verbo DELETE");
});

app.listen(3000);
console.log("Servidor online...");
