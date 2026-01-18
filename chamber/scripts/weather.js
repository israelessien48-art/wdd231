const apiKey = "675da5db65da9d176494d1851a766faa";
const city = "Lagos";
const units = "metric";

const currentTempEl = document.getElementById("current-temp");
const weatherDescEl = document.getElementById("weather-desc");
const forecastEl = document.getElementById("forecast");

async function getWeather() {
  try {
    // 1. Get current weather
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    const currentResponse = await fetch(currentUrl);
    const currentData = await currentResponse.json();

    const temp = Math.round(currentData.main.temp);
    const description = currentData.weather[0].description;

    currentTempEl.textContent = `Current Temperature: ${temp}°C`;
    weatherDescEl.textContent = `Conditions: ${description}`;

    // 2. Get forecast weather
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    forecastEl.innerHTML = "";

    const forecastByDay = {};
    forecastData.list.forEach((item) => {
      if (item.dt_txt.includes("12:00:00")) {
        const date = item.dt_txt.split(" ")[0];
        forecastByDay[date] = item;
      }
    });

    const dates = Object.keys(forecastByDay).slice(1, 4);

    dates.forEach((date) => {
      const dayData = forecastByDay[date];
      const dayTemp = Math.round(dayData.main.temp);
      const dayDesc = dayData.weather[0].description;

      const forecastItem = document.createElement("div");
      forecastItem.classList.add("forecast-item");

      forecastItem.innerHTML = `
        <h3>${date}</h3>
        <p>${dayTemp}°C</p>
        <p>${dayDesc}</p>
      `;

      forecastEl.appendChild(forecastItem);
    });

  } catch (error) {
    console.error("Weather API error:", error);
    currentTempEl.textContent = "Weather data unavailable.";
    weatherDescEl.textContent = "";
  }
}

getWeather();
