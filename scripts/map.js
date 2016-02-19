(function(module){
var Map= {};
var map;
var infowindow = null;
var pos;
var userCoords;
var portlandCenter = {lat: 45.5296879, lng: -122.6526475};
var seattleCenter = {lat: 47.6149938, lng: -122.4763323};

Map.loadZipJson = function(){
  map.data.loadGeoJson('data/zipcodes.json');
};

Map.loadParkingJson = function(){
  map.data.loadGeoJson('data/Bicycle_Parking_pdx.geojson');
};

Map.showBikeLayer = function(){
  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
};

Map.showHeatMap = function() {
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData(),
    map: map
  });
};

Map.setZipStyle = function(feature){
  var highCrime = feature.getProperty('zipCode');
};

Map.getCurrentLocation = function (){
  if(navigator.geolocation){
    function error(err){
        console.log("error loading users geolocation" + err.code + ": "
        + err.message);
    }
    function success(pos) {
      userCoords = pos.coords;
      //console.log("lat: " + userCoords.latitude + ", long: " + userCoords.longitude);
      /*** Put down a marker on the current location ***/
      var marker = new google.maps.Marker({
        position: {lat: userCoords.latitude, lng: userCoords.longitude},
        map: map
        //icon: {path: google.maps.SymbolPath.CIRCLE, scale: 5}
      });
    }
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("geolocation is not supported in this browser");
  }
};

Map.defaultMap = function(){
  map = new google.maps.Map(document.getElementById('map'),
  {center: portlandCenter,
  zoom: 10,
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


// Map.initMap= function() {
//   Map.defaultMap();
//   Map.loadZipJson();
//   Map.loadParkingJson();
//   Map.showBikeLayer();
//   Map.showHeatMap();
//   //Map.setZipStyle(arrayName);
// };
function defaultMapView(){
  Map.initMap= function() {
    Map.defaultMap();
  };
};
defaultMapView();
function parkingMapView(){
  Map.initMap= function() {
    Map.defaultMap();
    Map.loadParkingJson();
  };
};
//parkingMapView();

function zipMapView(){
  Map.initMap= function() {
    Map.defaultMap();
    Map.loadZipJson();

  };
}
//zipMapView();

  // map.data.setStyle(function(feature){
  //   var highCrime = feature.getProperty('zipCode');
  //   var color = highCrime == 97201 ? 'red' : 'blue';
  //   return{
  //     fillColor: color,
  //     strokeWeight: 2
  //   };
  // });



  // var infowindow = new google.maps.InfoWindow({
  //   content: "place holder for now"
  // });

  //load zip code data file and build polygons on map for each zip code.  add bicycle parking data as well.
//map.data.loadGeoJson('data/zipcodes.json');
  //map.data.loadGeoJson('data/Bicycle_Parking_pdx.geojson');

  //places marker at click location and pan map to location
  // map.addListener('click', function(evt){
  //     placeMarkerAndPanTo(evt.latLng, map);
  //   });
  //


/*simple logic to demostrate coloring of zip code regions with unique colors.  Need more complex logic for prototyping*/
/*** Stuff for the address search bar ***/
Map.addressBarInput = function(){
    var address = (document.getElementById('address-input'));

    var autocomplete = new google.maps.places.Autocomplete(address);
    autocomplete.bindTo('bounds', map);
    // var marker = new google.maps.Marker({
    //   position: portlandCenter,
    //   map: map
    // });

    autocomplete.addListener('place_changed', function() {
    //marker.setVisible(false);

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
    }
    //marker.setPosition(place.geometry.location);
    //marker.setVisible(true);
  });
};

//
// function detectBrowser() {
//  var userAgent = navigator.userAgent;
//  var mapDiv = document.getElementById("map");
//
//  if (userAgent.indexOf('iphone') != -1 || userAgent.indexOf('Android') != -1) {
//    madDiv.style.width = '100%';
//    mapDiv.style.height = '100%';
//  } else {
//    mapDiv.style.width = '600px';
//    mapDiv.style.height = "800px"
//   }
//  }
//window.addEventListener('resize', initMap);

module.Map = Map;
})(window);
