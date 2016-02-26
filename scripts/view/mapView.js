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
        console.log('parking is checked');
        Map.loadParkingJson();
      } else {
        console.log('parking is unchecked');
        Map.removeParkingJson();
      }
    });
    /* Crime Checkbox */
    $('#crime').on('change', function(){
      if(this.checked) {
        console.log('crime is checked');
        Map.showHeatMap();
      } else {
        console.log('crime is unchecked');
        Map.removeHeatMap();
      }
    });
  };

  mapView.defaultMapView();
  mapView.handleMapOptions();

  module.mapView = mapView;
})(window);
