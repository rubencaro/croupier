Template.task.helpers({
  isOwner: function () {
    return this.owner === Meteor.userId();
  },
  listsNames: function(){
    var ls = Lists.find({_id: {$in: this.lists}}, {sort: {name: 1}}).fetch();
    return _.map(ls, function(l){return l.name});
  },
  projectsNames: function(){
    var ls = Lists.find({_id: {$in: this.lists}}, {fields: {projects: 1}}).fetch();
    var pids = _.uniq(_.flatten(_.map(ls, function(l){return l.projects})));
    var ps = Projects.find({_id: {$in: pids}}, {sort: {name: 1}}).fetch();
    return _.map(ps, function(p){return p.name});
  }
});
