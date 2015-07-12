Template.addListForm.events({
  "submit .new-list": function (event) {
    var name = event.target.name.value;

    Meteor.call("addList", name);

    // Clear/hide form
    event.target.name.value = "";
    document.querySelector('#add-list-form').style.display = 'none';

    // Prevent default form submit
    return false;
  }
});
