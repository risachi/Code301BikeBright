(function(module) {
  var aboutController = {};
  aboutController.index = function(){
  //mapView.defaultMapView();
  $('#home-page').hide();
  $('#about-page').show();
  $('#map-page').hide();
  $('#discuss-page').hide();
  };

  module.aboutController = aboutController;
})(window);
