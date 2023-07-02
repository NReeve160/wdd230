const currentTemp = document.querySelector('#current-temp');
const windChill = document.querySelector('#wind-chill')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?id=4151352&appid=4d13c09b98f2fc261f7c6cd83886167c&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(2)}</strong>`;
    const chill = 35.74 + 0.6215 * weatherData.main.temp - 35.75 * weatherData.wind.speed^0.16 + 0.4275 * weatherData.main.temp * weatherData.wind.speed^0.16;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    if (weatherData.main.temp <= 50 & weatherData.wind.speed >= 3) {
      windChill.innerHTML = `<strong>${chill.toFixed(2)}</strong>`
    } else {
      windChill.innerHTML = `<strong>NA</strong>`
    }
  }
  
  apiFetch();