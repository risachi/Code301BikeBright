(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('#home-page').hide();
    $('#map-page').hide();
    $('#discuss-page').hide();
    $('#about-page').show();
  };

  module.aboutController = aboutController;
})(window);
