(function(module) {
  var mapController = {};
  mapController.index = function() {
    $('#home-page').hide();
    $('#about-page').hide();
    $('#discuss-page').hide();
    $('#map-page').show();

    Map.setDefaultMap();
    Map.showHeatMap();
  };

  module.mapController = mapController;
})(window);