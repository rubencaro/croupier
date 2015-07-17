Template.projectsLinks.helpers({

  projects: function(){
    return Projects.find({_id: {$in: this.target.projects}},
                        {sort: {name: 1}}).fetch();
  }

});
