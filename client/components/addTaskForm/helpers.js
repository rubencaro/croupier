Template.addTaskForm.helpers({
  isDefault: function () {
    return Lists.findOne({},{sort: {name: 1}})._id == this._id;
  },
  lists: function(){
    return Lists.find();
  }
});
