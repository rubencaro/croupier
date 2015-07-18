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

  "dragstart": function (e) {
    var data = { taskId: this.task._id, todoId: this._id };
    e.originalEvent.dataTransfer.setData('text/plain',JSON.stringify(data));
  },

  "dragenter": function (e) {
  },

  "dragover": function (e) {
    e.preventDefault(); // Necessary. Allows us to drop.
    return false;
  },

  "dragleave": function (e) {
  },

  "drop": function (e) {
    e.stopPropagation(); // stops the browser from redirecting.
    var data = JSON.parse(e.originalEvent.dataTransfer.getData('text/plain'));
    Meteor.call("relocateTodo", data.taskId, data.todoId, this.position, this.empty);
    return false;
  },

  "dragend": function (e) {
  }

});
