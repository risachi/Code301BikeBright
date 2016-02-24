(function(module) {
  var mapController = {};
  mapController.index = function(){
  //mapView.defaultMapView();
  //console.log('map controller works');
  $('#home-page').hide();
  $('#about-page').hide();
  $('#map-page').show();
  $('#discuss-page').hide();
  };

  module.mapController = mapController;
})(window);
