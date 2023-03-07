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
        //getResults(formBox. value);
        console.log(formBox. value);
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
    let now = new Date(); //What dies this line do? Answer: It creates a new date object
    let date = document.querySelector('.location .date'); //What dies this line do? Answer: It selects the class date from the html file
    date.innerText = dateBuilder(now); //What dies this line do? Answer: It sets the inner text of the date variable to the value returned by the dateBuilder function
    let temp = document.querySelector('.temp'); //What dies this line do? Answer: It selects the class temp from the html file
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`; //What dies this line do? Answer: It sets the inner html of the temp variable to the temperature of the weather variable
    let weather_el = document.querySelector('.weather-type'); //What dies this line do? Answer: It selects the class weather from the html file
    weather_el.innerText = weather.weather[0].main; //What dies this line do? Answer: It sets the inner text of the weather_el variable to the weather description of the weather variable
    let tempRange = document.querySelector('.temp-range'); //What dies this line do? Answer: It selects the class temp-range from the html file
     //What dies this line do? Answer: It selects the class temp-range from the html file
    tempRange.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`; //What dies this line do? Answer: It sets the inner text of the tempRange variable to the min and max temperature of the weather variable. What does the main mean

}