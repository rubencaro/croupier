CodeHelpers = {
  toggle: function(sel){
    var el = document.querySelector(sel);
    el.style.display = (el.style.display != 'none' ? 'none' : '' );
  }
};

CH = CodeHelpers;
