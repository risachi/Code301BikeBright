(function(module) {
  var mapView = {

  };

  mapView.defaultMapView = function() {
    Map.initMap = function() {
      Map.setDefaultMap();
    };
  };

  mapView.handleMapOptions = function() {
    /* Current Location Button */
    $('#current-location').on('click', Map.getCurrentLocation);
    /* Parking Checkbox */
    $('#parking').on('change', function() {
      if (this.checked) {
        Map.loadParkingJson();
      } else {
        Map.removeParkingJson();
      }
    });
    /* Crime Checkbox */
    $('#crime').on('change', function(){
      if(this.checked) {
        Map.showHeatMap();
      } else {
        Map.removeHeatMap();
      }
    });
  };

  mapView.defaultMapView();
  mapView.handleMapOptions();

  module.mapView = mapView;
})(window);
