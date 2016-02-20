var bikeCrimeData;
/*
1.  getJson call to bike crime data for portland
  $.getJson("https://bikeindex.org:443/api/v2/bikes_search/stolen?page=20&proximity=portland%2C%20or&proximity_square=100", )

  https://bikeindex.org:443/api/v2/bikes_search/stolen?page=10&proximity=45.521728%2C-122.67326&proximity_square=1

2.  assign returned json to bikeCrimeData
3.  iterate through bike crime data array and make (map) new array containing date,location, and title
4.  create a function in view/bikeCrimeView.js that displays crime data leveraging google api heatmap
5.  create a infoview containing date(conversion to friendly date required), location(currently just zip code), and title for each incident plotted on map
*/
