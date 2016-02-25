(function(module) {
  var homeController = {};
  homeController.index = function() {
    $('#about-page').hide();
    $('#map-page').hide();
    $('#discuss-page').hide();
    $('#home-page').show();
  };

  module.homeController = homeController;
})(window);
