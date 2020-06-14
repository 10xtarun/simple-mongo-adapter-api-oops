const arrayDB = require("../database/array");

const getTodos = (req, res, next) => {
    var data = arrayDB.getTodos()
    res.json({status: 200, message: "success", data: data})
 };
 
 const addTodo = (req, res , next) => {
    var newTodo = req.body;
    var savedTodo = arrayDB.saveTodo(newTodo.taskId, newTodo.taskName, newTodo.completed);
    res.json({
        status: 200, 
        message: "added", 
        data: (savedTodo) ? savedTodo : "Failed to save the Todo, check for duplicate taskID."
    });
 }

 const updateTodo = (req, res, next) => {
     const id = req.params.id;
     var updatedTodo = arrayDB.updateTodo(id);
     res.json({
         status: 200,
         message: "success",
         data: (updateTodo) ? updateTodo : "Such TaskID does not exist."
     })
 }

 const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    var deletedTodo = arrayDB.deleteTodo(id);
    res.json({
        status: 200,
        message: "success",
        data: (deletedTodo) ? deletedTodo : "Such TaskID does not exist.",
    })
}

 module.exports.getTodos = getTodos;
 module.exports.addTodo = addTodo;
 module.exports.updateTodo = updateTodo;
 module.exports.deleteTodo = deleteTodo;