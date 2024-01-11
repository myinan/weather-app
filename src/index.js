import "./style.css";
import "./getWeatherInfo.js";
import "./displayWeatherInfo.js";
import { getCityInfo } from "./getWeatherInfo.js";
import loadingSVG from "./assets/loading.svg";
import githubSVG from "./assets/github-mark.svg";

const loading = document.querySelector("#loading");
const footerIconAnchor = document.querySelector(".footer-icon > a");

loading.innerHTML = loadingSVG;
footerIconAnchor.innerHTML = githubSVG;
footerIconAnchor.setAttribute("href", "https://github.com/myinan");
footerIconAnchor.setAttribute("title", "github.com/myinan");

document.addEventListener("DOMContentLoaded", () => {
  getCityInfo("Bursa");
});
