const { Router } = require('express');
const routes = Router();
//import controllers
const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controllers/main")

//@GET /todos   to get all todos
routes.get('/todos', getTodos);

//@POST /todos/add  to add a todo
routes.post('/todos/add', addTodo);

//@PUT /todos/:id    to update a todo
routes.put('/todos/update/:id', updateTodo);

//@DELETE /todos/delete/:id     to delete a Todo
routes.delete('/todos/delete/:id', deleteTodo);

module.exports = routes;