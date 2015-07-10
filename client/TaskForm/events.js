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

  // generic events
  "click .delete": function () {
    Meteor.call("deleteTask", this._id);
  },
  "click .close": function () {
    Router.go('/');
  },

  // DnD events
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
