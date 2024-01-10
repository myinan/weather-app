import "./displayWeatherInfo.css";
import { events } from "./events";

import windSVG from "./assets/wind.svg";
import humiditySVG from "./assets/humidity.svg";
import snowSVG from "./assets/snow.svg";
import rainSVG from "./assets/rain.svg";

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

const humidityIcon = document.querySelector(".humidity .icon");
const humidityHeading = document.querySelector(".humidity .heading");
const humidityValue = document.querySelector(".humidity .value");

const rainIcon = document.querySelector(".rain-chance .icon");
const rainHeading = document.querySelector(".rain-chance .heading");
const rainValue = document.querySelector(".rain-chance .value");

const snowIcon = document.querySelector(".snow-chance .icon");
const snowHeading = document.querySelector(".snow-chance .heading");
const snowValue = document.querySelector(".snow-chance .value");

const windIcon = document.querySelector(".wind-speed .icon");
const windHeading = document.querySelector(".wind-speed .heading");
const windValue = document.querySelector(".wind-speed .value");

// Get reference to main bottom container
const mainBottomContainer = document.querySelector(".main-bottom-container");

events.on("newCitySearched", (weatherData) => {
  renderToLeft(weatherData);
  renderToRight(weatherData);
  renderToBottom(weatherData);
});

// Render to main-top-left
function renderToLeft(data) {
  conditionLeft.textContent = data[0].condition;
  cityLeft.textContent = `${data[0].city}, ${data[0].country}`;
  dateLeft.textContent = data[0].dateFormatted;
  localTimeLeft.textContent = data[0].localTimeFormatted;
  conditionIconLeft.src = data[0].conditionIconUrl;

  data[0].temperature === "fahrenheit"
    ? (tempLeft.textContent = `${data[0].avgTempF} °F`)
    : (tempLeft.textContent = `${data[0].avgTempC} °C`);
}

// Render to main-top-right
function renderToRight(data) {
  /*   humidityRight.textContent = `Humidity:${data[0].humidity}%`;
  rainRight.textContent = `Chance of rain: ${data[0].chanceOfRain}%`;
  snowRight.textContent = `Chance of snow: ${data[0].chanceOfSnow}%`;
  windRight.textContent = `Wind speed: ${data[0].maxWindKph} km/h`;

  data[0].temperature === "fahrenheit"
    ? (windRight.textContent = `Wind speed: ${data[0].maxWindMph} mph`)
    : (windRight.textContent = `Wind speed: ${data[0].maxWindKph} km/h`); */

  humidityIcon.innerHTML = humiditySVG;
  humidityHeading.textContent = "Humidity";
  humidityValue.textContent = `${data[0].humidity}%`;

  rainIcon.innerHTML = rainSVG;
  rainHeading.textContent = "Rain chance";
  rainValue.textContent = `${data[0].chanceOfRain}%`;

  snowIcon.innerHTML = snowSVG;
  snowHeading.textContent = "Snow chance";
  snowValue.textContent = `${data[0].chanceOfSnow}%`;

  windIcon.innerHTML = windSVG;
  windHeading.textContent = "Wind speed";
  data[0].temperature === "fahrenheit"
    ? (windValue.textContent = `${data[0].maxWindMph} mph`)
    : (windValue.textContent = `${data[0].maxWindKph} km/h`);
}

// Render to main-bottom
function renderToBottom(data) {
  mainBottomContainer.textContent = "";
  data.forEach((item) => {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("item");

    const firstRow = document.createElement("div");
    firstRow.textContent = item.dayFormatted;

    const secondRow = document.createElement("div");
    item.temperature === "fahrenheit"
      ? (secondRow.textContent = `${item.avgTempF} °F`)
      : (secondRow.textContent = `${item.avgTempC} °C`);

    const thirdRow = document.createElement("div");
    const thirdRowFirstTemp = document.createElement("div");
    item.temperature === "fahrenheit"
      ? (thirdRowFirstTemp.textContent = `${item.minTempF} °F`)
      : (thirdRowFirstTemp.textContent = `${item.minTempC} °C`);

    const thirdRowSecondTemp = document.createElement("div");
    item.temperature === "fahrenheit"
      ? (thirdRowSecondTemp.textContent = `${item.maxTempF} °F`)
      : (thirdRowSecondTemp.textContent = `${item.maxTempC} °C`);

    thirdRow.append(thirdRowFirstTemp, thirdRowSecondTemp);

    const fourthRow = document.createElement("img");
    fourthRow.src = item.conditionIconUrl;

    containerDiv.append(firstRow, secondRow, thirdRow, fourthRow);
    mainBottomContainer.append(containerDiv);
  });
}
