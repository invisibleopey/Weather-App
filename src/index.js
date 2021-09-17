/* eslint-disable no-use-before-define */
/* eslint-disable operator-linebreak */
import 'regenerator-runtime';
// A function that hits the API and returns data
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b25577cea775f772e6801248daec3619`,
      { mode: 'cors' },
    );
    const responseObj = await response.json();
    processWeatherData(responseObj);
    console.log(responseObj);
    document.querySelector('.error-message').textContent = '';
  } catch (error) {
    document.querySelector('.error-message').textContent = 'Location not found, try another City';
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
  weatherInfo.icon = responseObj.weather[0].icon;
  renderWeatherInfo(weatherInfo);
  changeBackgroundPicture(weatherInfo.main);
  console.log(weatherInfo);
}
function changeBackgroundPicture(main) {
  switch (main) {
    case 'Clear':
      document.body.style.backgroundImage = 'url("clear.jpg")';
      break;
    case 'Clouds':
      document.body.style.backgroundImage = 'url("cloudy.jpg")';
      break;
    case 'Rain':
    case 'Drizzle':
    case 'Mist':
      document.body.style.backgroundImage = 'url("rain.jpg")';
      break;
    case 'Thunderstorm':
      document.body.style.backgroundImage = 'url("thunderstorm.jpg")';
      break;
    case 'Snow':
      document.body.style.backgroundImage = 'url("snow.jpg")';
      break;
    default:
      document.body.style.backgroundImage = 'url("main-background.jpg")';
  }
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

// Convert Temperature in celsius to farenheit
function toFahrenheit(celsius) {
  // eslint-disable-next-line no-param-reassign
  celsius = parseFloat(celsius);
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit.toFixed(2);
}
// Helper function to remove all contents of container
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
const renderWeatherInfo = function renderWeatherInfo(weatherInfo) {
  const container = document.querySelector('.output-section .centered');
  removeAllChildNodes(container);
  const cityName = document.createElement('h1');
  cityName.textContent = `${weatherInfo.city},`;
  const countryCode = document.createElement('h1');
  countryCode.textContent = weatherInfo.country;
  const todaysDate = document.createElement('div');
  todaysDate.textContent = new Date().toLocaleDateString();
  const temp = document.createElement('div');
  temp.classList.add('tempDiv');
  temp.textContent = `${weatherInfo.temp}°C`;
  const icon = new Image();
  icon.classList.add('weather-icon');
  icon.src = `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
  temp.appendChild(icon);
  const weatherDescription = document.createElement('div');
  weatherDescription.textContent = weatherInfo.description;
  weatherDescription.classList.add('weather-description');
  const feelsLike = document.createElement('div');
  feelsLike.textContent = `Feels like: ${weatherInfo.feelsLike}°C`;
  const humidity = document.createElement('div');
  humidity.textContent = `Humidity levels: ${weatherInfo.humidity}%`;
  container.append(
    cityName,
    countryCode,
    todaysDate,
    temp,
    weatherDescription,
    feelsLike,
    humidity,
  );
  // Toggle the Temp from Celcius to Fehreheit
  const toggleTemp = document.querySelector('.temp-checkbox');
  toggleTemp.addEventListener('change', () => {
    if (toggleTemp.checked) {
      setTimeout(() => {
        const tempInFahrenheit = toFahrenheit(weatherInfo.temp);
        const feelsLikeInFahrenheit = toFahrenheit(weatherInfo.feelsLike);
        temp.textContent = `${tempInFahrenheit}°F`;
        feelsLike.textContent = `Feels like: ${feelsLikeInFahrenheit}°F`;
        temp.appendChild(icon);
      }, 100);
    } else {
      setTimeout(() => {
        temp.textContent = `${weatherInfo.temp}°C`;
        feelsLike.textContent = `Feels like: ${weatherInfo.feelsLike}°C`;
        temp.appendChild(icon);
      }, 100);
    }
  });
};
