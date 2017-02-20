var express = require('express');
var apiRouter = express.Router();

var Film = require('../client/src/models/film');
var films = Films();

apiRouter.get('/', function(req, res){
  res.json(films);
});

apiRouter.get('/:id', function(req, res){
  res.json({data: films[res.params.id]});
});

apiRouter.post('/', function(req, res){
  films.push(req.body.film);
  res.json({data: films});
});

apiRouter.put('/', function(req, res){
  films[req.params.id] = req.body.film
  res.json({data: films});
});

apiRouter.delete('/:id', function(res, res){
  films.splice(req.params.id, 1)
  res.json({data: films});
});