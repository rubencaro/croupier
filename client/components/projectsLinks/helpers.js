Template.projectsLinks.helpers({

  projects: function(){
    if(this.list) return this.list;
    return Projects.find({_id: {$in: this.target.projects}},
                        {sort: {name: 1}}).fetch();
  }

});
