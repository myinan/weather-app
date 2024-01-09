import "./displayWeatherInfo.css";
import { events } from "./events";

// Get references to top left container, inner container elements
const conditionLeft = document.querySelector(".condition");
const cityLeft = document.querySelector(".city");

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
}
