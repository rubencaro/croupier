Template.todoList.helpers({

  todos: function(task){
    if(!task || !task.todos) return [];

    var todos = _.sortBy(task.todos,'position');
    todos = _.map(todos, function(t){
      t.task = task;
      return t;
    });
    return todos;
  }
  
});
