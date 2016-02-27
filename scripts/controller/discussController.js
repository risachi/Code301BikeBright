(function(module) {
  var discussController = {};
  discussController.index = function() {
    $('#home-page').hide();
    $('#about-page').hide();
    $('#map-page').hide();
    $('#discuss-page').show();

    $(window).off('scroll');
    $('header').removeClass("expanded");
  };

  module.discussController = discussController;
})(window);
