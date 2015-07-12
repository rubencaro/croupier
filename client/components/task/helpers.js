Template.task.helpers({
  isOwner: function () {
    return this.owner === Meteor.userId();
  },
  listsNames: function(){
    var ls = Lists.find({_id: {$in: this.lists}}).fetch();
    return _.map(ls, function(l){return l.name});
  }
});
