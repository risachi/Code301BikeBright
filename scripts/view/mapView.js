(function (module){
  var mapView = {

  };
  mapView.defaultMapView= function(){
    Map.initMap= function() {
      Map.setDefaultMap();
      Map.showHeatMap();
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



  mapView.handleMapOptions();
  mapView.defaultMapView();

// mapView.parkingMapView= function(){
//   Map.initMap= function() {
//     Map.setDefaultMap();
//     Map.loadParkingJson();
//     Map.loadZipJson();
//   };
// };
// mapView.parkingMapView();

//  mapView.zipMapView= function(){
//   Map.initMap= function() {
//     Map.setDefaultMap();
//
//   };
// }
// mapView.zipMapView();

  module.mapView = mapView;
})(window);
