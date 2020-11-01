const express = require("express");
const cors = require("cors");
//const {uuid} = require('uuidv4');

 const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];


app.get("/repositories", (request, response) => {
  const {title} = request.query;
  const results = title ? repositories.filter(repository => repository.title.includes(title)) : repositories;
  return response.json(results);
});

app.post("/repositories", (request, response) => {
  const {title,url,techs} = request.body;
  const repository = {id:uuid(),title:title,url:url,techs:techs,likes:0};

  repositories.push(repository);
  return response.json(repositories);
});

app.put("/repositories/:id", (request, response) => {
  const {id}=request.params;
  const repositoryId = repositories.findIndex(repository => repository.id == id);
  if(repositoryId<0){
    return response.status(400).json({error:'Repository does not exists'});
  }
  const {title,url,techs} = request.body;
  const repository = {
    id,title,url,techs
  };
  repositories[repositoryId] = repository;
  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const repositoryId = repositories.findIndex(repository => repository.id == id);
  if (repositoryId<0){
    return response.status(400).json({error:'Repository does not exists'});
  }
  repositories.splice(repositoryId,1);
  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const {id} = request.params;
  const repositoryId = repositories.findIndex(repository=>repository.id == id);
  if (repositoryId<0){
    return response.status(400).json({error:'Repository does not exists'});
  }
  repositories[repositoryId].likes += 1;
  return response.json(repositories[repositoryId]);
  
});

module.exports = app;
