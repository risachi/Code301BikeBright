(function(module) {
  var aboutController = {};
  aboutController.index = function(){
  //mapView.defaultMapView();
  //console.log('map controller works');
  $('#home-page').hide();
  $('#about-page').show();
  $('#map-page').hide();
  $('#discuss-page').hide();
  };

  module.aboutController = aboutController;
})(window);
