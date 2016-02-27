(function(module) {
  var mapController = {};
  mapController.index = function() {
    $('#home-page').hide();
    $('#about-page').hide();
    $('#discuss-page').hide();
    $('#map-page').show();

    $(window).off('scroll');
    $('header').removeClass("expanded");

    Map.setDefaultMap();
    $('#crime').prop('checked', true);
    Map.showHeatMap();
  };

  module.mapController = mapController;
})(window);
