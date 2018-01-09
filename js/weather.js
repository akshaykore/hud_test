function getweather() {
  
var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=a7689f15092d8a5c1185dedbf0d3b998';



$.getJSON(apiCall, weatherCallback);

function weatherCallback(weatherdata){
    
    var temperature = Math.round(weatherdata.main.temp - 273.15);
    //alert(temperature + " °C");
    console.log(weatherdata.main);
    //console.log("lol");
    var weather_element = document.getElementById("weather");
        weather_element.innerHTML = temperature + " °C";
    
}
}
    
getweather();
setInterval(getweather, 60000);