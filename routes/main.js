const { Router } = require('express');
const routes = Router();
//import controllers
const todoController = require("../controllers/main")

routes.get('/todos', todoController);
module.exports = routes;