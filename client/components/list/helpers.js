Template.list.helpers({
  tasks: function (list) {
    var tasks = [];
    if (Session.get("hideCompleted")) {
      // If hide completed is checked, filter tasks
      tasks = Tasks.find({checked: {$ne: true},lists: {$all: [list._id]}}, {sort: {position: 1}});
    } else {
      // Otherwise, return all of the tasks
      tasks = Tasks.find({lists: {$all: [list._id]}}, {sort: {position: 1}});
    }
    return _.map(tasks.fetch(), function(t){ t.renderingList = list; return t; });
  },
  incompleteCount: function (list) {
    return Tasks.find({checked: {$ne: true},lists: {$all: [list._id]}}).count();
  },
  totalCount: function (list) {
    return Tasks.find({lists: {$all: [list._id]}}).count();
  },
  projectsNames: function(){
    var ps = Projects.find({_id: {$in: this.projects}}, {sort: {name: 1}}).fetch();
    return _.map(ps, function(p){return p.name});
  }
});
