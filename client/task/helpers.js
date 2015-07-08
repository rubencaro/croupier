Template.task.helpers({
  isOwner: function () {
    return this.owner === Meteor.userId();
  }
});
