///////////////////////
// project methods

Meteor.methods({

  addProject: function (name) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Projects.insert({
      name: name,
      createdAt: new Date(),            // current time
      owner: Meteor.userId(),           // _id of logged in user
    });
  },

});
