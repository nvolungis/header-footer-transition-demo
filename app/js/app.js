$(document).ready(function(){
  var pageLoader = new PageLoader();

  if(window.location.hash == ''){
    window.location.hash = 'page-1';
  }else {
    $(window).trigger('hashchange');
  }
});
