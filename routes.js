const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const taskController = require('./src/controllers/taskController');


// Rotas da home
route.get('/', homeController.paginaInicial);

// Rotas de tarefas
route.get('/addTask', taskController.addTask);

route.post('/added', taskController.added);

module.exports = route;