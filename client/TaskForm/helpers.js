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
  }
  
});
