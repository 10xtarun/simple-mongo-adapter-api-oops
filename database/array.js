
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
        this.DB.push({
            taskName: taskName,
            taskId : taskId,
            completed : completed
        })
    }
    //@READ get all todos
    getTodos(){
        return this.DB;
    }

    //@UPDATE get particular todo
    updateTodo(taskId){
        console.log("taskId, ", taskId)
          this.DB.find((todo, index) => {
              if(todo.taskId == taskId){
                  //toggle between completed is true or false
                  if(DB[index]['completed'] == true){
                    DB[index].completed = false
                  }else if(DB[index]['completed'] == false){
                    console.log(DB[index].completed)
                    DB[index].completed = true
                  }
              }
          })
        //   var todo = DB.find((todo) => todo.taskId == taskId);
        //   return todo;
    }

    //@DELETE
    deleteTodo(taskId){
        DB.find((todo, index) => {
            if(todo.taskId == taskId){
                DB.splice(index, 1);
            }
        })
    }
}

var todoArrayDB = new ArrayDB();
module.exports = todoArrayDB;