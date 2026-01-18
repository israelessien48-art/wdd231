const apiKey = "675da5db65da9d176494d1851a766faa"; // Replace with your own API key
const city = "Lagos"; // Replace with your city
const units = "metric"; // metric = Celsius, imperial = Fahrenheit

const currentTempEl = document.getElementById("current-temp");
const weatherDescEl = document.getElementById("weather-desc");
const forecastEl = document.getElementById("forecast");

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Current Weather (first item in list)
    const current = data.list[0];
    const temp = Math.round(current.main.temp);
    const description = current.weather[0].description;

    currentTempEl.textContent = `Current Temperature: ${temp}°C`;
    weatherDescEl.textContent = `Conditions: ${description}`;

    // 3-Day Forecast
    forecastEl.innerHTML = "";

    // Choose one forecast per day at 12:00:00
    const forecastByDay = {};

    data.list.forEach((item) => {
      if (item.dt_txt.includes("12:00:00")) {
        const date = item.dt_txt.split(" ")[0];
        forecastByDay[date] = item;
      }
    });

    // Get the next 3 days
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
