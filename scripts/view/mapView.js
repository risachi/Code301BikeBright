(function (module){
  var mapView = {

  };
//   mapView.defaultMapView= function(){
//     Map.initMap= function() {
//       Map.setDefaultMap();
//     };
//   };
// mapView.defaultMapView();

mapView.parkingMapView= function(){
  Map.initMap= function() {
    Map.setDefaultMap();
    Map.loadParkingJson();
  };
};
mapView.parkingMapView();

 mapView.zipMapView= function(){
  Map.initMap= function() {
    Map.setDefaultMap();
    Map.loadZipJson();
  };
}
mapView.zipMapView();

  module.mapView = mapView;
})(window);
