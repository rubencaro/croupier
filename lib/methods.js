Meteor.methods({
  addTask: function (text, list) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    // top of the list
    var pos = 0.0;
    var t = Tasks.findOne({}, {sort: {position: 1}});
    if(t) pos = t.position - 1.0;

    Tasks.insert({
      text: text,
      lists: [list],
      position: pos,                    // top of the list
      createdAt: new Date(),            // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().services.google.name,  // username of logged in user
      picture: Meteor.user().services.google.picture
    });
  },
  deleteTask: function (taskId) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }

    Tasks.remove(taskId);
  },
  setChecked: function (taskId, setChecked) {
    var task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, { $set: { checked: setChecked} });
  },
  setPrivate: function (taskId, setToPrivate) {
    var task = Tasks.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, { $set: { private: setToPrivate } });
  },
  reorderTask: function (destPosition, taskId) {
    // gather the surrounding positions
    var limits = Tasks.find({position: { $lte: destPosition }},
                              { sort: {position: -1},
                                fields: {position: 1},
                                limit: 2 }).fetch();

    // discard any change if given task is one of the surrounding ones
    if(!limits[0] || limits[0]._id == taskId || (limits[1] && limits[1]._id == taskId)) return;

    // by default, locate above the first one
    var newPosition = limits[0].position - 1.0;

    // if there is a second one, place between them
    if(limits[1]) newPosition = (limits[0].position + limits[1].position)/2.0;

    Tasks.update(taskId, { $set: { position: newPosition } });
  },
  setLists: function(taskId, value) {
    // only one by now
    Tasks.update(taskId, { $set: { lists: [value] } });
  }
});
