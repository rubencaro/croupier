Template.registerHelper('visible_lists', function(){
  var lists = Tasks.find({},{fields: {lists: 1}})
                .map(function(t){ return t.lists });
  return _.uniq(_.compact(_.flatten(lists)))
})
