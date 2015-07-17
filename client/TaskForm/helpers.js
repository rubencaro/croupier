Template.TaskForm.helpers({

  isOwner: function () {
    return this.owner === Meteor.userId();
  },

  firstList: function() {
    if(this.lists && this.lists[0]){
      return this.lists[0];
    }else{
      return 'None';
    }
  },

  projectsNames: function(){
    var ps = Projects.find({_id: {$in: this.projects}}, {sort: {name: 1}}).fetch();
    return _.map(ps, function(p){return p.name});
  },

  listsForTask: function(){
    var task = this;
    var lists = Lists.find({}, {sort: {name: 1}}).fetch();
    return _.map(lists, function(l){
      if(_.contains(task.lists,l._id)) l.isSelected = true;
      return l;
    })
  }

});
