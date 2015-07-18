///////////////////////
// todo methods

Meteor.methods({

  addTodo: function (text, taskId) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    // bottom of the list
    var pos = 0.0;
    var ts = Tasks.findOne({_id: taskId}).todos;
    if(ts && (ts.length > 0)) pos = _.max(_.map(ts, function(t){return t.position;})) + 1.0;

    var todo = {_id: Date.now(), text: text, position: pos, checked: false};

    Tasks.update(taskId, { $addToSet: {todos: todo} });
  },

  setTodoText: function(taskId, todoId, text){
    Tasks.update( { _id: taskId, "todos._id": todoId },
                  { $set: {"todos.$.text": text} });
  },

  setTodoChecked: function(taskId, todoId, value){
    Tasks.update( { _id: taskId, "todos._id": todoId },
                  { $set: {"todos.$.checked": value} });
  },

  deleteTodo: function (taskId, todoId) {
    Tasks.update( { _id: taskId }, { $pull: { todos: { _id: todoId } } });
  },

});
