Router.route('/', function () {
  this.render('Home');
});

Router.route('/task/:_id', function () {
  this.render('TaskForm', {
    data: function () {
      return Tasks.findOne({_id: this.params._id});
    }
  });
});

Router.route('/project/:_id', function () {
  this.render('ProjectPane', {
    data: function () {
      return Projects.findOne({_id: this.params._id});
    }
  });
});
