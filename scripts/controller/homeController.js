(function(module) {
  var homeController = {};
  homeController.index = function(){
  console.log('home controller works');
};

  module.homeController = homeController;
})(window);
