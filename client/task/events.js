Template.task.events({
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    Meteor.call("setChecked", this._id, ! this.checked);
  },
  "click .delete": function () {
    Meteor.call("deleteTask", this._id);
  },
  "click .toggle-private": function () {
    Meteor.call("setPrivate", this._id, ! this.private);
  },
  "dragstart": function (e) {
    // console.log('dragstart');
    e.originalEvent.dataTransfer.setData('text/plain', this._id);
  },
  "dragenter": function (e) {
    // console.log('dragenter');
  },
  "dragover": function (e) {
    // console.log('dragover');
    e.preventDefault(); // Necessary. Allows us to drop.
    return false;
  },
  "dragleave": function (e) {
    // console.log('dragleave');
  },
  "drop": function (e) {
    // console.log('drop');
    e.stopPropagation(); // stops the browser from redirecting.
    Meteor.call("reorderTask", this.position,
                    e.originalEvent.dataTransfer.getData('text/plain'));
    return false;
  },
  "dragend": function (e) {
    // console.log('dragend');
  }
});
