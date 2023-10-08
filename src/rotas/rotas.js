const express = require('express');
const rotas = express.Router();
const controladores = require('../controllers/controlador')




rotas.post('/cadastro', controladores.cadastrarUsuario)
rotas.post('/login', controladores.login)






module.exports = rotas