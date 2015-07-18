///////////////////////
// list methods

Meteor.methods({

  addList: function (name, project) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Lists.insert({
      name: name,
      projects: [project],
      createdAt: new Date(),            // current time
      owner: Meteor.userId(),           // _id of logged in user
    });
  },

});
