import "./style.css";
import "./getWeatherInfo.js";
import "./displayWeatherInfo.js";
import { getCityInfo } from "./getWeatherInfo.js";

document.addEventListener("DOMContentLoaded", () => {
  getCityInfo("Bursa");
});
