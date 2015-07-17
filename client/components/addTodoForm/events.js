Template.addTodoForm.events({

  "submit .new-todo": function(e){
    var text = event.target.text.value;
    var task = event.target.task.value;

    Meteor.call("addTodo", text, task);

    // Clear/hide form
    event.target.text.value = "";
    document.querySelector('#add-todo-form').style.display = 'none';

    // Prevent default form submit
    return false;
  }

});
