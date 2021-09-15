import 'regenerator-runtime';
// A function that hits the API and returns data
async function getWeatherData(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b25577cea775f772e6801248daec3619`,
    { mode: 'cors' },
  );
  const responseObj = await response.json();
  console.log(responseObj);
}
getWeatherData('Ilorin');
