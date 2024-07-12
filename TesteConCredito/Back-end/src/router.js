const express = require('express');
const controllerPessoa= require('./controllers/PessoaController');
const jwt = require('jsonwebtoken')

const routes = express.Router();

routes.post('/Login', controllerPessoa.Login);

routes.post('/Create', controllerPessoa.Create);

routes.get('/List', controllerPessoa.List);

routes.post('/Update', controllerPessoa.Update);

// routes.get('/GetOne', controllerPessoa.GetOne);
routes.post('/GetOne', controllerPessoa.GetOne);

routes.post('/Delete', controllerPessoa.Delete);

module.exports = routes;
