// Servidor mínimo com Express.
// Rodar: npm install (uma vez) e depois npm start
const express = require("express");

const app = express();
const PORTA = 3000;

// Permite ler o corpo (body) das requisições enviadas em JSON
app.use(express.json());

// Serve os arquivos da pasta "public" (nosso front-end: HTML, CSS, JS)
app.use(express.static("public"));

const frases = [
  "Todo site que você usa está rodando em algum servidor.",
  "O front-end pede, o servidor responde.",
  "localhost é o seu próprio computador fazendo o papel de servidor.",
  "O React também usa um servidor local enquanto você desenvolve.",
];

// ROTA 1 (GET): devolve uma frase aleatória
// Acesse também direto no navegador: http://localhost:3000/api/frase
app.get("/api/frase", (req, res) => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  res.json({ frase });
});

// ROTA 2 (POST): recebe dados de um formulário e devolve uma resposta
app.post("/api/mensagem", (req, res) => {
  const { nome, mensagem } = req.body;

  if (!nome || !mensagem) {
    return res.status(400).json({ erro: "Preencha o nome e a mensagem." });
  }

  console.log(`Mensagem recebida de ${nome}: ${mensagem}`);

  res.json({
    resposta: `Olá, ${nome}! O servidor recebeu sua mensagem: "${mensagem}"`,
  });
});

// ROTA 3 (GET): devolve uma lista de itens (array de objetos) em JSON
// O front-end vai percorrer essa lista e criar um card para cada item
app.get("/api/tecnologias", (req, res) => {
  const tecnologias = [
    { id: 1, nome: "HTML", descricao: "Estrutura da página", emoji: "📄" },
    { id: 2, nome: "CSS", descricao: "Estilo e layout", emoji: "🎨" },
    { id: 3, nome: "JavaScript", descricao: "Interatividade", emoji: "⚡" },
    { id: 4, nome: "React", descricao: "Interfaces com componentes", emoji: "⚛️" },
  ];
  res.json(tecnologias);
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
