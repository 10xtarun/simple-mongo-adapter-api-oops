const arrayDB = require("../database/array");

const getTodos = (req, res, next) => {
    var data = arrayDB.getTodos()
    res.json({status: 200, message: "success", data: data})
 };
 
 const addTodo = (req, res , next) => {
    var newTodo = req.body;
    arrayDB.saveTodo(newTodo.taskId, newTodo.taskName, newTodo.completed);
    res.json({status: 200, message: "added", data: newTodo});
 }

 const updateTodo = (req, res, next) => {
     const id = req.params.id;
     const todo = arrayDB.updateTodo(id);
     console.log(todo);
     res.json({
         status: 200,
         message: "success",
         data: todo,
     })
 }

 const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    res.json({
        status: 200,
        message: "success",
        Data: "Deleted"
    })
}

 module.exports.getTodos = getTodos;
 module.exports.addTodo = addTodo;
 module.exports.updateTodo = updateTodo;
 module.exports.deleteTodo = deleteTodo;