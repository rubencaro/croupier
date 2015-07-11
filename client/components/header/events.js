Template.header.events({
  "change .hide-completed input": function (event) {
    Session.set("hideCompleted", event.target.checked);
  },
  "click .show-add-task-form": function(e){
    document.querySelector('#add-task-form').style.display = 'block';
  },
  "click .show-add-list-form": function(e){
    document.querySelector('#add-list-form').style.display = 'block';
  }
});
