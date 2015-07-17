Template.ProjectPane.helpers({

  lists: function(){
    return Lists.find({projects: {$all: [this._id]}},
                      {sort: {position: 1}});
  }

});
