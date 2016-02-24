(function(module) {
  var homeController = {};
  homeController.index = function(){
    //console.log('home controller works');
    $('#home-page').show();
    $('#about-page').show();
    $('#map-page').hide();
    $('#discuss-page').hide();
  };

  module.homeController = homeController;
})(window);
