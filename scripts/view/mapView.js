(function (module){
  var mapView = {

  };
  mapView.defaultMapView= function(){
    Map.initMap= function() {
      Map.setDefaultMap();
    };
  };

  mapView.handleParkingFilter = function(){

  };
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
