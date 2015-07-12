Template.header.events({
  "change .hide-completed input": function (event) {
    Session.set("hideCompleted", event.target.checked);
  },
  "click .show-add-task-form": function(e){
    CH.toggle('#add-task-form');
  },
  "click .show-add-list-form": function(e){
    CH.toggle('#add-list-form');
  }
});
