import { events } from "./events";
import "./getWeatherInfo.css";

const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const errorText = document.querySelector(".error-text");

searchBtn.addEventListener("click", () => {
  if (!checkInput()) return;
  getCityInfo(searchInput.value);
});

export async function getCityInfo(city) {
  const weatherData = await getWeather(city);
  const forecastDaysArr = Array.from(weatherData.forecast.forecastday);
  events.emit(
    "newCitySearched",
    createUsefulDataArr(forecastDaysArr, weatherData.location.name),
  );
}

function checkInput() {
  if (!searchInput.value) {
    errorText.classList.remove("display-none");
    return false;
  }
  errorText.classList.add("display-none");
  return true;
}

async function getWeather(location) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_METHOD = "/forecast.json";
  const API_KEY = "d5756cd98907479bb82210421240601";
  const DAYS = 3;
  try {
    const responseForecast = await fetch(
      `${BASE_URL}${API_METHOD}?key=${API_KEY}&q=${location}&days=${DAYS}`,
      { mode: "cors" },
    );
    const forecastData = await responseForecast.json();
    return forecastData;
  } catch (error) {
    console.log(error);
  }
}

function createUsefulDataArr(arr, cityName) {
  let dataArr = [];
  arr.forEach((item) => {
    let newObj = {
      city: cityName,
      date: item.date,
      avgTempC: item.day.avgtemp_c,
      avgTempF: item.day.avgtemp_f,
      maxTempC: item.day.maxtemp_c,
      maxTempF: item.day.maxtemp_f,
      minTempC: item.day.mintemp_c,
      minTempF: item.day.mintemp_f,
      condition: item.day.condition.text,
      chanceOfRain: item.day.daily_chance_of_rain,
      chanceOfSnow: item.day.daily_chance_of_snow,
    };
    dataArr.push(newObj);
  });
  return dataArr;
}
