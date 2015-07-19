///////////////////////
// log methods

Meteor.methods({

  addLog: function (data) {
    var defaults = {
      createdAt: new Date(),                        // current time
      username: Meteor.user().services.google.name  // current user
    };

    Logs.insert(_.extend(defaults, data));
  },

});
