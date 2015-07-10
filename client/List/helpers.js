Template.List.helpers({
  tasks: function () {
    if (Session.get("hideCompleted")) {
      // If hide completed is checked, filter tasks
      return Tasks.find({checked: {$ne: true}}, {sort: {position: 1}});
    } else {
      // Otherwise, return all of the tasks
      return Tasks.find({}, {sort: {position: 1}});
    }
  },
  incompleteCount: function () {
    return Tasks.find({checked: {$ne: true}}).count();
  }
});
