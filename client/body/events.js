Template.body.events({
  "submit .new-task": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;

    Meteor.call("addTask", text);

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  },
  "change .hide-completed input": function (event) {
    Session.set("hideCompleted", event.target.checked);
  }
});
