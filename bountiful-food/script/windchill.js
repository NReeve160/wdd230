const currentTemp = document.querySelector('#current-temp');
const humidity = document.querySelector('#humidity');
const condition = document.querySelector('#condition');

const currentTemp1 = document.querySelector('#current-temp1');
const humidity1 = document.querySelector('#humidity1');
const condition1 = document.querySelector('#condition1');

const currentTemp2 = document.querySelector('#current-temp2');
const humidity2 = document.querySelector('#humidity2');
const condition2 = document.querySelector('#condition2');

const currentTemp3 = document.querySelector('#current-temp3');
const humidity3 = document.querySelector('#humidity3');
const condition3 = document.querySelector('#condition3');

//const url = 'https://api.openweathermap.org/data/2.5/weather?id=5334320&appid=4d13c09b98f2fc261f7c6cd83886167c&units=imperial';
const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carmel-by-the-Sea&appid=4d13c09b98f2fc261f7c6cd83886167c&units=imperial';

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
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(2)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.list[0].main.humidity}</strong>`;
    condition.innerHTML = `<strong>${weatherData.list[0].weather[0].description}</strong>`;

    currentTemp1.innerHTML = `<strong>${weatherData.list[1].main.temp.toFixed(2)}</strong>`;
    humidity1.innerHTML = `<strong>${weatherData.list[1].main.humidity}</strong>`;
    condition1.innerHTML = `<strong>${weatherData.list[1].weather[0].description}</strong>`;

    currentTemp2.innerHTML = `<strong>${weatherData.list[2].main.temp.toFixed(2)}</strong>`;
    humidity2.innerHTML = `<strong>${weatherData.list[2].main.humidity}</strong>`;
    condition2.innerHTML = `<strong>${weatherData.list[2].weather[0].description}</strong>`;

    currentTemp3.innerHTML = `<strong>${weatherData.list[3].main.temp.toFixed(2)}</strong>`;
    humidity3.innerHTML = `<strong>${weatherData.list[3].main.humidity}</strong>`;
    condition3.innerHTML = `<strong>${weatherData.list[3].weather[0].description}</strong>`;
  }
  
  apiFetch();