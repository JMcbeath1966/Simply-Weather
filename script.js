window.onload = function() {
const api = {
  baseurl: "https://api.openweathermap.org/data/2.5/",
  key: "8afe3279994cbd73dbc74066c796d2b9" 
}
const formBox = document.querySelector(".form-control");
formBox.addEventListener("keypress", setQuery);

function setQuery(e)   {
    if (e.keyCode === 13) {
      if(formBox.value.trim() === '') {
        alert('Please enter a city name');
        getResults(formBox. value);
      } else {
        getResults(formBox.value)
      }
    }
}

function getResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
          if (!weather.ok) {
              throw new Error('Invalid city name. Please try again! - Cities can have the same name in different countries, e.g Newark, US or Newark, GB');
          }
          return weather.json();
      })
      .then(displayResults)
      .catch(error => {
          alert('Error: ' + error.message);
      });
}

function getResultsByCoords(lat, lon) {
  fetch(`${api.baseurl}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${api.key}`)
      .then(weather => {
          if (!weather.ok) {
              throw new Error('Invalid coordinates');
          }
          return weather.json();
      })
      .then(displayResults)
      .catch(error => {
          alert('Error: ' + error.message);
      });
}

function getLocationWeather() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          getResultsByCoords(lat, lon);
      }, () => {
          console.warn('Geolocation permission denied. Falling back to default location.');
      });
  } else {
      console.warn('Geolocation not supported by the browser. Falling back to default location.');
  }
}
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`
    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);
    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    let weather_el = document.querySelector(".weather-type"); 
    weather_el.innerText = weather.weather[0].main; 
    let tempRange = document.querySelector(".temp-range"); 
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

getLocationWeather();
}