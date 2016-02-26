(function(module) {
  var mapController = {};
  mapController.index = function() {
    $('#home-page').hide();
    $('#about-page').hide();
    $('#discuss-page').hide();
    $('#map-page').show();

    Map.setDefaultMap();
    $('#crime').prop('checked', true);
    Map.showHeatMap();
  };

  module.mapController = mapController;
})(window);
