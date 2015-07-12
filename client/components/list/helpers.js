Template.list.helpers({
  tasks: function (list) {
    if (Session.get("hideCompleted")) {
      // If hide completed is checked, filter tasks
      return Tasks.find({checked: {$ne: true},lists: {$all: [list._id]}}, {sort: {position: 1}});
    } else {
      // Otherwise, return all of the tasks
      return Tasks.find({lists: {$all: [list._id]}}, {sort: {position: 1}});
    }
  },
  incompleteCount: function (list) {
    return Tasks.find({checked: {$ne: true},lists: {$all: [list._id]}}).count();
  },
  totalCount: function (list) {
    return Tasks.find({lists: {$all: [list._id]}}).count();
  }
});