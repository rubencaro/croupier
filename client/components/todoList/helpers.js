Template.todoList.helpers({

  todos: function(task){
    return _.sort(task.todos,{position: 1});
  }

});
