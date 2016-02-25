(function (module){
  var mapView = {

  };
  mapView.defaultMapView= function(){
    Map.initMap= function() {
      Map.setDefaultMap();
      // Map.showHeatMap();
    };
  };

  mapView.handleMapOptions = function(){
    /* Current Location Button */
    $('#current-location').on('click', Map.getCurrentLocation);
    /* Show Parking Checkbox */
    $('#parking').on('change', function(){
      if(this.checked){
        console.log('parking is checked');
        Map.loadParkingJson();
      }
      else {
        console.log('parking is unchecked');
        Map.removeParkingJson();
      }
    });
  };


  mapView.defaultMapView();
  mapView.handleMapOptions();


  module.mapView = mapView;
})(window);
