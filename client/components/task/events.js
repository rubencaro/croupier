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
    var data = {taskId: this._id, sourceListId: this.renderingList._id };
    e.originalEvent.dataTransfer.setData('text/plain',JSON.stringify(data));
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
    var data = JSON.parse(e.originalEvent.dataTransfer.getData('text/plain'));
    Meteor.call("relocateTask", data.taskId, data.sourceListId,
                                this.position, this.renderingList._id, this.empty);
    return false;
  },

  "dragend": function (e) {
  }

});
