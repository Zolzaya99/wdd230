const elements = {
  currentTemp: document.querySelector('#current-temp'),
  weatherIcon: document.querySelector('#weather-icon'),
  captionDesc: document.querySelector('figcaption'),
  forecastContainer: document.querySelector('#forecast'),
};

const apiKey = '3ca8e2a67b3b49294bcd20997ecbc766';
const lat = 43.83;
const lon = -111.79;

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function fetchCurrentWeather() {
  try {
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayCurrentWeather(data) {
  const { main, weather } = data;
  const currentTemperature = main.temp.toFixed(2);
  const currentWeatherDescription = weather[0].description;

  elements.currentTemp.textContent = `${currentTemperature}°F`;
  elements.weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weather[0].icon}.png`);
  elements.captionDesc.textContent = currentWeatherDescription;
}

async function fetchWeatherForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayWeatherForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log("Error fetching weather forecast:", error);
  }
}

function displayWeatherForecast(data) {
  const dailyForecasts = [];

  data.list.forEach(forecast => {
    const date = forecast.dt_txt.split(' ')[0];
    if (!dailyForecasts.some(item => item.date === date)) {
      dailyForecasts.push({
        date,
        main: forecast.main,
        weather: forecast.weather[0]
      });
    }
  });

  elements.forecastContainer.innerHTML = '';

  const forecastLimit = 4;

  dailyForecasts.slice(0, forecastLimit).forEach(forecast => {
    const { date, main, weather } = forecast;
    const forecastDate = new Date(date);
    const temperature = main.temp.toFixed(2);
    const weatherDescription = weather.description;

    const forecastElement = document.createElement('div');
    forecastElement.classList.add('forecast-item');

    const dateElement = document.createElement('p');
    dateElement.textContent = forecastDate.toLocaleDateString(undefined, {
      month: 'long',
      day: 'numeric'
    });
    forecastElement.appendChild(dateElement);

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `${temperature}°F`;
    forecastElement.appendChild(temperatureElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = weatherDescription;
    forecastElement.appendChild(descriptionElement);

    const iconElement = document.createElement('img');
    iconElement.classList.add('weather-icon');
    iconElement.setAttribute('src', `https://openweathermap.org/img/w/${weather.icon}.png`);
    forecastElement.appendChild(iconElement);

    elements.forecastContainer.appendChild(forecastElement);
  });
}

fetchCurrentWeather();
fetchWeatherForecast();
