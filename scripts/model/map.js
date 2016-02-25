(function(module){
var Map= {};
var map;
var parkingMarkers;
var pos;
var userCoords;
var portlandCenter = {lat: 45.5296879, lng: -122.6526475};
var heatmap;


Map.loadParkingJson = function(){
  parkingMarkers = new google.maps.Data();
  parkingMarkers.loadGeoJson('/data/Bicycle_Parking_pdx.geojson');
  parkingMarkers.setMap(map);
};

Map.removeParkingJson = function(){
  parkingMarkers.setMap(null);
};

Map.showBikeLayer = function(){
  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
};

Map.showHeatMap = function() {
  var g= [
    'rgba(0, 255, 255, 0)',
'rgba(0, 255, 255, 1)',
'rgba(0, 191, 255, 1)',
'rgba(0, 127, 255, 1)',
'rgba(0, 63, 255, 1)',
'rgba(0, 0, 255, 1)',
'rgba(0, 0, 223, 1)',
'rgba(0, 0, 191, 1)',
'rgba(0, 0, 159, 1)',
'rgba(0, 0, 127, 1)',
'rgba(63, 0, 91, 1)',
'rgba(127, 0, 63, 1)',
'rgba(191, 0, 31, 1)',
'rgba(255, 0, 0, 1)'
  ]
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData(),
    gradient: g
  });
  heatmap.setMap(map);
};


Map.getCurrentLocation = function (){
  if(navigator.geolocation){
    function error(err){
        alert('unable to locate current location');
    }
    function success(pos) {
      userCoords = pos.coords;
      var currentLocation = {lat: userCoords.latitude, lng: userCoords.longitude};
      map.setCenter(currentLocation);
      map.setZoom(17);
      /* Clear out address input field if a location was already added */
      (document.getElementById('address-input')).value = '';
      /* Hides loading indicator */
      $('#loading').css('display', 'none');
    }
    /* Displays loading indicator */
    $('#loading').css('display', 'inline');
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("geolocation is not supported in this browser");
  }
};

Map.setDefaultMap = function(){
  map = new google.maps.Map(document.getElementById('map'),
  {center: portlandCenter,
  zoom: 13,
  zoomControl: true,
  mayTypeControl: true,
  mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    mapTypeIds: [
      google.maps.MapTypeId.ROADMAP,
      google.maps.MapTypeId.TERRAIN,
      google.maps.MapTypeId.SATELLITE
      ]
    }
  }
  );
  Map.addressBarInput();
};

/*** Stuff for the address search bar ***/
Map.addressBarInput = function(){
    var address = (document.getElementById('address-input'));

    var autocomplete = new google.maps.places.Autocomplete(address);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', function() {


    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
      /* Clear out address input field if a location was already added */
      (document.getElementById('address-input')).value = '';
    }
  });
};


module.Map = Map;

})(window);


$(function() {
  Map.showHeatMap();
});
