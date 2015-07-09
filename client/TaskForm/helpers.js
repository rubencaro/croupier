Template.TaskForm.helpers({
  isOwner: function () {
    return this.owner === Meteor.userId();
  }
});
