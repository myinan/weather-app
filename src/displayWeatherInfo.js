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

events.on("newCitySearched", (weatherData) => {
  loginfo(weatherData);
  renderToLeft(weatherData);
});

function loginfo(data) {
  console.log(data);
}

function renderToLeft(data) {
  conditionLeft.textContent = data[0].condition;
  cityLeft.textContent = `${data[0].city}, ${data[0].country}`;
  dateLeft.textContent = data[0].dateFormatted;
  localTimeLeft.textContent = data[0].localTimeFormatted;
  tempLeft.textContent = `${data[0].avgTempC} °C`;
}
