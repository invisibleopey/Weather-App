import 'regenerator-runtime';
// A function that hits the API and returns data
async function getWeatherData(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b25577cea775f772e6801248daec3619`,
    { mode: 'cors' },
  );
  const responseObj = await response.json();
  processWeatherData(responseObj);
}
function processWeatherData(responseObj) {
  const weatherInfo = {};
  weatherInfo.city = responseObj.name;
  weatherInfo.country = responseObj.sys.country;
  weatherInfo.feelsLike = responseObj.main.feels_like;
  weatherInfo.humidity = responseObj.main.humidity;
  weatherInfo.temp = responseObj.main.temp;
  weatherInfo.sunrise = responseObj.sys.sunrise;
  weatherInfo.sunset = responseObj.sys.sunset;
  weatherInfo.description = responseObj.weather[0].description;
  weatherInfo.main = responseObj.weather[0].main;
  console.log(weatherInfo);
}
const searchForm = document.querySelector('#search-form');
const searchTextField = document.querySelector('#search-text-field');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = searchTextField.value;
  getWeatherData(location);
  searchForm.reset();
});
getWeatherData('Ilorin');
