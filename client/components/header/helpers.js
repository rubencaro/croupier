Template.header.helpers({

  hideCompleted: function () {
    return Session.get("hideCompleted");
  },

  status: function(){
    return Meteor.status().status;
  }

});
