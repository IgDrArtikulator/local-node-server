# Servidor local com Node + Express

Projeto mínimo para mostrar, na prática, como um servidor local funciona.
O front-end (pasta `public`) faz requisições para três rotas do servidor (`server.js`).

## Pré-requisito

- [Node.js](https://nodejs.org) instalado (versão LTS)

## Como rodar

```bash
npm install
npm start
```

Depois abra **http://localhost:3000** no navegador.

## Rotas

| Método | Rota             | O que faz                                      |
|--------|------------------|------------------------------------------------|
| GET    | `/api/frase`     | Devolve uma frase aleatória em JSON            |
| POST   | `/api/mensagem`  | Recebe `nome` e `mensagem` e devolve uma resposta |
| GET    | `/api/tecnologias` | Devolve uma lista de objetos; o front renderiza como cards |

## Estrutura

```
servidor-local/
├── public/
│   └── index.html   # front-end (HTML + JS com fetch)
├── server.js        # servidor Express com as rotas
└── package.json     # única dependência: express
```

## Para experimentar

- Acesse `http://localhost:3000/api/frase` direto no navegador e veja o JSON.
- Abra o terminal enquanto envia o formulário: o servidor imprime a mensagem recebida.
- Altere as frases em `server.js`, reinicie o servidor (`Ctrl+C` e `npm start`) e teste de novo.
