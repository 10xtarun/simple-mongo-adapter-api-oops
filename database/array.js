
class ArrayDB {
    constructor(){
        this.DB = [ ]
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
        console.log(this.DB);
        return this.DB;
    }

    //@UPDATE get particular todo
    updateTodo(taskId){
          DB.find((todo, index) => {
              if(todo.taskId == taskId){
                  //toggle between completed is true or false
                  if(DB[index].completed == true){
                    DB[index].completed = false
                  }else{
                    DB[index].completed = true
                  }
              }
          })
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

todoArrayDB.saveTodo(3, "task3");
todoArrayDB.getTodos();