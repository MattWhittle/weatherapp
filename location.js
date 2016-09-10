$(document).ready(function(){
    $("#tempToggle").click(function() {
        $(".tempDisplay").toggle();
    });
});


var unit1 = "imperial";
var unit2 = "metric";
function getWeather(lat, long) {
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=70e7dcd40ec5a6bbabf3f10d325238c9&units=";
  console.log(url);
  $.getJSON(url + unit1, function(data){
    var currentTemp = Math.round(data.main.temp);
    $("#faren").append(currentTemp + "°F");
    $("#weather").append(data.weather[0].main + "<br> <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
    $("#location").append(data.name);
  });
  $.getJSON(url + unit2, function(data){
    $("#celsius").append(Math.round(data.main.temp) + "°C");
  });
}
function getLoc(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var long = position.coords.longitude;
      var lat = position.coords.latitude;
      getWeather(lat,long);
      });
    } else {
      alert("Geolocation is not supported by browser");
  }
}

window.onload(getLoc());


//http://127.0.0.1:53180/api.openweathermap.org/data/2.5/weather?lat=35.181999499999996&lon=-80.8027618&APPID=70e7dcd40ec5a6bbabf3f10d325238c9&units=imperial