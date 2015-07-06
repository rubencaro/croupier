Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("tasks");
  Meteor.subscribe("userData");

  Template.body.helpers({
    tasks: function () {
      if (Session.get("hideCompleted")) {
        // If hide completed is checked, filter tasks
        return Tasks.find({checked: {$ne: true}}, {sort: {position: 1}});
      } else {
        // Otherwise, return all of the tasks
        return Tasks.find({}, {sort: {position: 1}});
      }
    },
    hideCompleted: function () {
      return Session.get("hideCompleted");
    },
    incompleteCount: function () {
      return Tasks.find({checked: {$ne: true}}).count();
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted

      var text = event.target.text.value;

      Meteor.call("addTask", text);

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    },
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  });

  Template.task.helpers({
    isOwner: function () {
      return this.owner === Meteor.userId();
    }
  });

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
      console.log('dragstart');
    },
    "dragenter": function (e) {
      console.log('dragenter');
    },
    "dragover": function (e) {
      console.log('dragover');
      e.preventDefault(); // Necessary. Allows us to drop.
      return false;
    },
    "dragleave": function (e) {
      console.log('dragleave');
    },
    "drop": function (e) {
      console.log('drop');
      e.stopPropagation(); // stops the browser from redirecting.
      return false;
    },
    "dragend": function (e) {
      console.log('dragend');
    }
  });
}

Meteor.methods({
  addTask: function (text) {
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
  }
});

if (Meteor.isServer) {
  Meteor.publish("tasks", function () {
    return Tasks.find({
      $or: [
        { private: {$ne: true} },
        { owner: this.userId }
      ]
    });
  });

  Meteor.publish("userData", function () {
    if (this.userId) {
      return Meteor.users.find({_id: this.userId},
                               {fields: {'services': 1}});
    } else {
      this.ready();
    }
  });
}
