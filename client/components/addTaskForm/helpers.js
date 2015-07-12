Template.addTaskForm.helpers({

  isDefault: function () {
    return Lists.findOne({},{sort: {name: 1}})._id == this._id;
  },

  lists: function(){
    return Lists.find();
  },

  projectsNames: function(list){
    var ps = Projects.find({_id: {$in: list.projects}}, {sort: {name: 1}}).fetch();
    return _.map(ps, function(p){return p.name});
  }
  
});
