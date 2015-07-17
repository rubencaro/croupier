Template.listsLinks.helpers({

  lists: function(){
    return Lists.find({_id: {$in: this.target.lists}},
                      {sort: {name: 1}}).fetch();
  }

});
