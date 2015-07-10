Template.TaskForm.events({
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    Meteor.call("setChecked", this._id, ! this.checked);
  },
  "click .delete": function () {
    Meteor.call("deleteTask", this._id);
  },
  "click .close": function () {
    Router.go('/');
  },
  "click .toggle-private": function () {
    Meteor.call("setPrivate", this._id, ! this.private);
  },
  "dragstart": function (e) {
    e.originalEvent.dataTransfer.setData('text/plain', this._id);
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
    Meteor.call("reorderTask", this.position,
                    e.originalEvent.dataTransfer.getData('text/plain'));
    return false;
  },
  "dragend": function (e) {
  }
});
