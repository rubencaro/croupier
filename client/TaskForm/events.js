Template.TaskForm.events({

  // field editing events
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    Meteor.call("setChecked", this._id, ! this.checked);
  },

  "click .toggle-private": function () {
    Meteor.call("setPrivate", this._id, ! this.private);
  },

  "change .select-list": function (e) {
    Meteor.call("setLists", this._id, e.target.value);
  },

  "change .title": function (e) {
    Meteor.call("setTitle", this._id, e.target.value);
  },

  "change .text": function (e) {
    Meteor.call("setText", this._id, e.target.value);
  },

  // generic events
  "click .delete": function () {
    Meteor.call("deleteTask", this._id);
  },

  "click .close": function () {
    Router.go('/');
  },
});
