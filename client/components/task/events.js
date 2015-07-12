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
    var data = {taskId: this._id, sourceListId: this.renderingList._id };
    e.originalEvent.dataTransfer.setData('text/plain',JSON.stringify(data));
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
    var data = JSON.parse(e.originalEvent.dataTransfer.getData('text/plain'));
    console.dir(data);
    console.dir(this);
    Meteor.call("relocateTask", data.taskId, data.sourceListId,
                                this.position, this.renderingList._id );
    return false;
  },
  "dragend": function (e) {
    // console.log('dragend');
  }
});
