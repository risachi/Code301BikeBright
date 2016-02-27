(function(module) {
  var homeController = {};
  homeController.index = function() {
    $('#about-page').hide();
    $('#map-page').hide();
    $('#discuss-page').hide();
    $('#home-page').show();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
          $('header').removeClass("expanded");
        } else {
          $('header').addClass("expanded");
        }
    });
    $('header').addClass("expanded");
  };

  module.homeController = homeController;
})(window);
