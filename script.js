/* Structure for code
Api function

formbox addevent listener on keypress 

function for query (input details are correct)

add validation code 

if/else for form validation

function to get results from API for weather variable

function to display results
date
temp
weather
temprange

create arrays for months and days

function for dates, year etc.

*/

const api = {
    key: "8afe3279994cbd73dbc74066c796d2b9",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const formBox = document.querySelector('.form-control');
formBox.addEventListener('keypress', setQuery);

function setQuery(e)   {
    if (e.keyCode === 13) {
        getResults(formBox. value);
    }
}

function getResults (query) { 
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => { //code taken from stackoverflow. Amended after manual test. Error found with api.base - should have been baseurl
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.weather-type'); 
    weather_el.innerText = weather.weather[0].main; 
    let tempRange = document.querySelector('.temp-range'); 
    tempRange.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  