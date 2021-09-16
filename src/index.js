/* eslint-disable operator-linebreak */
import 'regenerator-runtime';
// A function that hits the API and returns data
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b25577cea775f772e6801248daec3619`,
      { mode: 'cors' },
    );
    const responseObj = await response.json();
    processWeatherData(responseObj);
    document.querySelector('.error-message').textContent = '';
  } catch (error) {
    document.querySelector('.error-message').textContent =
      'Location could not be found, please try another City';
  }
}
function processWeatherData(responseObj) {
  const weatherInfo = {};
  weatherInfo.city = responseObj.name;
  weatherInfo.country = responseObj.sys.country;
  weatherInfo.feelsLike = responseObj.main.feels_like;
  weatherInfo.humidity = responseObj.main.humidity;
  weatherInfo.temp = responseObj.main.temp;
  weatherInfo.description = responseObj.weather[0].description;
  weatherInfo.main = responseObj.weather[0].main;
  renderWeatherInfo(weatherInfo);
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

// Helper function to remove all contents of container
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
const renderWeatherInfo = function renderWeatherInfo(weatherInfo) {
  const container = document.querySelector('.output-section');
  removeAllChildNodes(container);
  const cityName = document.createElement('div');
  cityName.textContent = `${weatherInfo.city},`;
  const countryCode = document.createElement('div');
  countryCode.textContent = weatherInfo.country;
  const todaysDate = document.createElement('div');
  todaysDate.textContent = new Date().toLocaleDateString();
  const temp = document.createElement('div');
  temp.textContent = `${weatherInfo.temp}°`;
  const weatherDiscription = document.createElement('div');
  weatherDiscription.textContent = weatherInfo.description;
  const feelsLike = document.createElement('div');
  feelsLike.textContent = `Feels like: ${weatherInfo.feelsLike}°`;
  const humidity = document.createElement('div');
  humidity.textContent = `Humidity levels: ${weatherInfo.humidity}%`;
  container.append(
    cityName,
    countryCode,
    todaysDate,
    temp,
    weatherDiscription,
    feelsLike,
    humidity,
  );
};
