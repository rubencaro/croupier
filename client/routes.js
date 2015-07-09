Router.route('/task/:_id', function () {
  this.render('TaskForm', {
    data: function () {
      return Tasks.findOne({_id: this.params._id});
    }
  });
});
