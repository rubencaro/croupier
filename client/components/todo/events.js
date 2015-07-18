Template.todo.events({

  "click .toggle-todo-checked": function () {
    Meteor.call("setTodoChecked", this.task._id, this._id, ! this.checked);
  },

  "change .todo-text": function (e) {
    Meteor.call("setTodoText", this.task._id, this._id, e.target.value);
  },

  "click .todo-delete": function () {
    Meteor.call("deleteTodo", this.task._id, this._id);
  },

});
