Template.header.events({

  "change .hide-completed input": function (event) {
    Session.set("hideCompleted", event.target.checked);
  },

  "click .show-add-task-form": function(){
    CH.toggle('#add-task-form');
  },

  "click .show-add-list-form": function(){
    CH.toggle('#add-list-form');
  },

  "click .show-add-project-form": function(){
    CH.toggle('#add-project-form');
  }

});
