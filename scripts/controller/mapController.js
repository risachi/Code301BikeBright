(function(module) {
  var mapController = {};
  mapController.index = function(){
  $('#home-page').hide();
  $('#about-page').hide();
  $('#map-page').show();
  $('#discuss-page').hide();
  };

  module.mapController = mapController;
})(window);
