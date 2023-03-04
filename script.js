/* Structure for code
Api function

formbox addevent listener on keypress 

function for query (input details are correct)

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


