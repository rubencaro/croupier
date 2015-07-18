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

  relocateTodo: function(taskId, todoId, destPosition, empty){
    var todos = Tasks.findOne({_id: taskId}).todos;

    // locate last by default
    var newPosition = CH.lastPosition(todos) + 1.0;

    // gather the surrounding positions if not in the empty placeholder
    if(!empty){
      var limits = _.sortBy(_.filter(todos, function(t){ return t.position <= destPosition }),'position').slice(0,2);

      // discard any change if given todo is one of the surrounding ones
      if(!limits[0] || limits[0]._id == todoId || (limits[1] && limits[1]._id == todoId)) return;

      // by default, locate above the first one
      newPosition = limits[0].position - 1.0;

      // if there is a second one, place between them
      if(limits[1]) newPosition = (limits[0].position + limits[1].position)/2.0;
    }

    Tasks.update( { _id: taskId, "todos._id": todoId },
                  { $set: {"todos.$.position": newPosition} } );
  }

});
