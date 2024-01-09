import "./displayWeatherInfo.css";
import { events } from "./events";

// Get references to top left container, inner container elements
const conditionLeft = document.querySelector(
  ".top-left-container > .condition",
);
const cityLeft = document.querySelector(".top-left-container > .city");
const dateLeft = document.querySelector(".top-left-container > .date");
const localTimeLeft = document.querySelector(
  ".top-left-container > .local-time",
);
const tempLeft = document.querySelector(".top-left-container > .temperature");
const conditionIconLeft = document.querySelector(
  ".top-left-container > .condition-icon",
);

// Get references to top right container, inner container elements
const humidityRight = document.querySelector(
  ".top-right-container > .humidity",
);
const rainRight = document.querySelector(".top-right-container > .rain-chance");
const snowRight = document.querySelector(".top-right-container > .snow-chance");
const windRight = document.querySelector(".top-right-container > .wind-speed");

// Get reference to main bottom container
const mainBottomContainer = document.querySelector(".main-bottom-container");

events.on("newCitySearched", (weatherData) => {
  loginfo(weatherData);
  renderToLeft(weatherData);
  renderToRight(weatherData);
  renderToBottom(weatherData);
});

function loginfo(data) {
  console.log(data);
}

// Render to main-top-left
function renderToLeft(data) {
  conditionLeft.textContent = data[0].condition;
  cityLeft.textContent = `${data[0].city}, ${data[0].country}`;
  dateLeft.textContent = data[0].dateFormatted;
  localTimeLeft.textContent = data[0].localTimeFormatted;
  tempLeft.textContent = `${data[0].avgTempC} °C`;
  conditionIconLeft.src = data[0].conditionIconUrl;
}

// Render to main-top-right
function renderToRight(data) {
  humidityRight.textContent = `Humidity: ${data[0].humidity}%`;
  rainRight.textContent = `Chance of rain: ${data[0].chanceOfRain}%`;
  snowRight.textContent = `Chance of snow: ${data[0].chanceOfSnow}%`;
  windRight.textContent = `Wind speed: ${data[0].maxWindKph} km/h`;
}

// Render to main-bottom
function renderToBottom(data) {
  data.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.append(
      item.dayFormatted,
      item.minTempC,
      item.avgTempC,
      item.maxTempC,
    );
    mainBottomContainer.append(newDiv);
  });
}
