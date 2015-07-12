Template.addListForm.events({
  "submit .new-list": function (event) {
    var name = event.target.name.value;
    var project = event.target.project.value;

    Meteor.call("addList", name, project);

    // Clear/hide form
    event.target.name.value = "";
    document.querySelector('#add-list-form').style.display = 'none';

    // Prevent default form submit
    return false;
  }
});
