Template.addTaskForm.events({

  "submit .new-task": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;
    var list = event.target.list.value;

    Meteor.call("addTask", text, list);

    // Clear/hide form
    event.target.text.value = "";
    document.querySelector('#add-task-form').style.display = 'none';

    // Prevent default form submit
    return false;
  }
  
});
