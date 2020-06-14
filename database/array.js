const { deleteTodo } = require("../controllers/main");

class ArrayDB {
    constructor(){
        this.DB = [ 
            {
                taskName: "task 1",
                taskId: 1,
                completed: false
            }
        ]
    }
    //@CREATE save todo to DB array
    saveTodo(taskId, taskName, completed=false){
        var index = this.taskIdExists(taskId);
        if(index == -1){    //such tasKID does not exits
            this.DB.push({
                taskName: taskName,
                taskId : taskId,
                completed : completed
            })
            return true;
        } else {
            //taskID exists already, so reject it 
            return false;
        }
        
    }
    //@READ get all todos
    getTodos(){
        return this.DB;
    }

    //@UPDATE get particular todo
    updateTodo(taskId){
        var index = this.taskIdExists(taskId);
        if(index == -1) {   //check if the taskID exists or not
            return false;
        } else {
            //the taskId exists already
            //toggle between completed is true or false
            if(this.DB[index].completed == true){
                this.DB[index].completed = false
              }else {
                this.DB[index].completed = true
              }
        }
        //return the updated todo
        return this.DB[index];
    }

    //@DELETE
    deleteTodo(taskId){
        var index = this.taskIdExists(taskId); //check for index exists
        if(index == -1){
            //if index does not exist;
            return false;
        } else {
            //if index exists, so delete the todo and return it.
            var deletedTodo = this.DB.splice(index, 1);
            return deletedTodo[0];
        }
    }

    /*Helper Methods*/
    //check that todo already exist or not in array
    taskIdExists(taskId) {
        //creat expression for matching taskId
        const IdExpression = (todo) => todo.taskId == taskId;
        //if taskId exists then return it or return -1 
        var index = this.DB.findIndex(IdExpression);
        return index;
    }
}

var todoArrayDB = new ArrayDB();
module.exports = todoArrayDB;