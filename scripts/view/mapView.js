(function (module){
  var mapView = {

  };
  mapView.defaultMapView= function(){
    Map.initMap= function() {
      Map.setDefaultMap();
    };
  };

  mapView.handleMapOptions = function(){
    /* Current Location Button */
    $('#current-location').on('click', Map.getCurrentLocation);
    /* Show Parking Checkbox */
    $('#parking').on('change', function(){
      if(this.checked){
        console.log('this is checked');
      }
      else {
        console.log('this is unchecked');
      }
    });
  };

  mapView.handleMapOptions();
// mapView.defaultMapView();

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
