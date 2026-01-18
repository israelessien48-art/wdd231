const apiKey = "675da5db65da9d176494d1851a766faa";
const city = "Lagos";
const units = "metric";

const currentTempEl = document.getElementById("current-temp");
const weatherDescEl = document.getElementById("weather-desc");
const forecastEl = document.getElementById("forecast");

function formatDate(date) {
  const options = { weekday: "short", month: "short", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Current Weather
    const current = data.list[0];
    const temp = Math.round(current.main.temp);
    const description = current.weather[0].description;

    currentTempEl.textContent = `Current Temperature: ${temp}°C`;
    weatherDescEl.textContent = `Conditions: ${description}`;

    // 3-Day Forecast
    forecastEl.innerHTML = "";

    const forecastByDay = {};

    data.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const day = date.toISOString().split("T")[0]; // YYYY-MM-DD

      if (!forecastByDay[day]) {
        forecastByDay[day] = [];
      }
      forecastByDay[day].push(item);
    });

    const today = new Date().toISOString().split("T")[0];

    // Get the next 3 days
    const nextDays = Object.keys(forecastByDay)
      .filter((d) => d > today)
      .slice(0, 3);

    nextDays.forEach((day) => {
      const dayData = forecastByDay[day][0];
      const dayTemp = Math.round(dayData.main.temp);
      const dayDesc = dayData.weather[0].description;

      const forecastItem = document.createElement("div");
      forecastItem.classList.add("forecast-item");

      forecastItem.innerHTML = `
        <h3>${formatDate(new Date(day))}</h3>
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
