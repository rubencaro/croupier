CodeHelpers = {

  // toggle display from 'none' to '' for given selector
  toggle: function(sel){
    var el = document.querySelector(sel);
    el.style.display = (el.style.display != 'none' ? 'none' : '' );
  },

  // get the last position of given list of objects with 'position' attribute
  // 0 if no list or list is empty
  lastPosition: function(list){
    var pos = 0.0;
    if(list && (list.length > 0))
      pos = _.max(_.map(list, function(t){return t.position;}));
    return pos;
  },

  // get the first position of given list of objects with 'position' attribute
  // 0 if no list or list is empty
  firstPosition: function(list){
    var pos = 0.0;
    if(list && (list.length > 0))
      pos = _.min(_.map(list, function(t){return t.position;}));
    return pos;
  }

};

CH = CodeHelpers;
