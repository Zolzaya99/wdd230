// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');
// const forecastContainer = document.querySelector('#forecast');

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${43.83}&lon=${-111.79}&units=imperial&appid=3ca8e2a67b3b49294bcd20997ecbc766`;

// async function fetchCurrentWeather() {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       displayCurrentWeather(data);
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchCurrentWeather();

// function displayCurrentWeather(data) {
//   const currentTemperature = data.main.temp;
//   const currentWeatherDescription = data.weather[0].description;

//   currentTemp.textContent = `${currentTemperature.toFixed(2)}°F`;
//   const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//   weatherIcon.setAttribute('src', iconsrc);
//   captionDesc.textContent = currentWeatherDescription;
// }

// const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${43.83}&lon=${-111.79}&appid=3ca8e2a67b3b49294bcd20997ecbc766`;

// fetch(forecastUrl)
//   .then(response => response.json())
//   .then(data => {
//     const threeDayForecast = data.list.slice(0, 16); // Adjust the number of forecast entries based on your desired range (e.g., 24 entries for 3 days at 1-hour intervals)

//     forecastContainer.innerHTML = ''; // Clear any existing forecast elements

//     threeDayForecast.forEach(forecast => {
//       const forecastDateTime = new Date(forecast.dt * 1000); // Convert UNIX timestamp to JavaScript Date object
//       const temperature = forecast.main.temp;
//       const weatherDescription = forecast.weather[0].description;

//       const forecastElement = document.createElement('div');
//       forecastElement.classList.add('forecast-item');

//       const dateTimeElement = document.createElement('p');
//       const dateTimeOptions = {
//         month: 'numeric',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         hour12: true
//       };
//       const forecastDateTimeString = forecastDateTime.toLocaleString(undefined, dateTimeOptions);
//       dateTimeElement.textContent = forecastDateTimeString;
//       forecastElement.appendChild(dateTimeElement);

//       const temperatureElement = document.createElement('p');
//       temperatureElement.textContent = `${temperature.toFixed(2)}°F`;
//       forecastElement.appendChild(temperatureElement);

//       const descriptionElement = document.createElement('p');
//       descriptionElement.textContent = weatherDescription;
//       forecastElement.appendChild(descriptionElement);

//       forecastContainer.appendChild(forecastElement);
//     });
//   })
//   .catch(error => {
//     console.log("Error fetching weather forecast:", error);
//   });

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
  
  fetchCurrentWeather();
  
  function displayCurrentWeather(data) {
    const { main, weather } = data;
    const currentTemperature = main.temp.toFixed(2);
    const currentWeatherDescription = weather[0].description;
  
    elements.currentTemp.textContent = `${currentTemperature}°F`;
    elements.weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weather[0].icon}.png`);
    elements.captionDesc.textContent = currentWeatherDescription;
  }
  
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  
  fetch(forecastUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(data => {
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
  
      dailyForecasts.forEach(forecast => {
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
    })
    .catch(error => {
      console.log("Error fetching weather forecast:", error);
    });
  