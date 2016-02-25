(function(module) {
  var discussController = {};
  discussController.index = function(){
  $('#home-page').hide();
  $('#about-page').hide();
  $('#map-page').hide();
  $('#discuss-page').show();
  };

  module.discussController = discussController;
})(window);
