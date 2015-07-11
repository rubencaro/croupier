Template.header.events({
  "change .hide-completed input": function (event) {
    Session.set("hideCompleted", event.target.checked);
  }
});
