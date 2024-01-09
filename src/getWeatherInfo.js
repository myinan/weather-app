import { events } from "./events";
import { format, parse } from "date-fns";
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
  const cleanedData = createUsefulDataArr(weatherData);
  events.emit("newCitySearched", cleanedData);
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

function createUsefulDataArr(data) {
  const locationData = data.location;
  const date = data.location.localtime;
  const dateParsed = parse(date, "yyyy-MM-dd HH:mm", new Date());
  const formattedLocalTime = format(dateParsed, "h:mm a");
  const forecastDaysArr = Array.from(data.forecast.forecastday);

  let dataArr = [];
  forecastDaysArr.forEach((item) => {
    const localDate = item.date;
    const parsedLocalDate = parse(localDate, "yyyy-MM-dd", new Date());
    const formattedDay = format(parsedLocalDate, "EEEE");
    const formattedDate = format(parsedLocalDate, "EEEE, do MMM ''yy");

    let newObj = {
      country: locationData.country,
      city: locationData.name,
      dateFormatted: formattedDate,
      localTimeFormatted: formattedLocalTime,
      dayFormatted: formattedDay,
      avgTempC: item.day.avgtemp_c,
      avgTempF: item.day.avgtemp_f,
      maxTempC: item.day.maxtemp_c,
      maxTempF: item.day.maxtemp_f,
      minTempC: item.day.mintemp_c,
      minTempF: item.day.mintemp_f,
      condition: item.day.condition.text,
      conditionIconUrl: item.day.condition.icon,
      chanceOfRain: item.day.daily_chance_of_rain,
      chanceOfSnow: item.day.daily_chance_of_snow,
      humidity: item.day.avghumidity,
      maxWindKph: item.day.maxwind_kph,
      maxWindMph: item.day.maxwind_mph,
    };
    dataArr.push(newObj);
  });
  return dataArr;
}
