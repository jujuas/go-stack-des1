# Go Stack - Desafio 1
## 🚀 Sobre o desafio

Nesse desafio, foi criada uma aplicação para treinar o Node.js.

Nesta, é possivel armazenar repositórios que permitem a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".


## Rotas da aplicação

POST /repositories: A rota deve recebe title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; O ID é sempre um UUID, e os likes iniciam como 0.

GET /repositories: Rota que lista todos os repositórios;

PUT /repositories/:id: A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

DELETE /repositories/:id: A rota deve deletar o repositório com o id presente nos parâmetros da rota;

POST /repositories/:id/like: A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;
