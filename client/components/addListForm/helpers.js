Template.addListForm.helpers({

  isDefault: function () {
    return Projects.findOne({},{sort: {name: 1}})._id == this._id;
  },

  projects: function(){
    return Projects.find();
  }
  
});
