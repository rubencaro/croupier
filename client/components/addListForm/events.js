Template.addListForm.events({
  "submit .new-list": function (event) {
    var name = event.target.name.value;

    Meteor.call("addList", name);

    // Clear form
    event.target.name.value = "";

    // Prevent default form submit
    return false;
  }
});
