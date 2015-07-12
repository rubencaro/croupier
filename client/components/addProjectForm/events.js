Template.addProjectForm.events({

  "submit .new-project": function (event) {
    var name = event.target.name.value;

    Meteor.call("addProject", name);

    // Clear/hide form
    event.target.name.value = "";
    document.querySelector('#add-project-form').style.display = 'none';

    // Prevent default form submit
    return false;
  }
  
});
