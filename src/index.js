import "./style.css";
import "./getWeatherInfo.js";
import "./displayWeatherInfo.js";
import { getCityInfo } from "./getWeatherInfo.js";
import loadingSVG from "./assets/loading.svg";

const loading = document.querySelector("#loading");

loading.innerHTML = loadingSVG;

document.addEventListener("DOMContentLoaded", () => {
  getCityInfo("Bursa");
});
