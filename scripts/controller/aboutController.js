(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('#home-page').hide();
    $('#map-page').hide();
    $('#discuss-page').hide();
    $('#about-page').show();

    $(window).off('scroll');
    $('header').removeClass("expanded");
  };

  module.aboutController = aboutController;
})(window);
