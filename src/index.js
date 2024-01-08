import "./style.css";
import getWeather from "./getLocationWeatherInfo";

const searchInput = document.querySelector("form > input");
const searchBtn = document.querySelector("form > button");

searchBtn.addEventListener("click", searchCity);

async function searchCity() {
  const weatherData = await getWeather(searchInput.value);
  const forecastDaysArr = Array.from(weatherData.forecast.forecastday);
  createUsefulDataArr(forecastDaysArr);
}

function createUsefulDataArr(arr) {
  let usefulDataArr = [];
  arr.forEach((item) => {
    let newObj = {
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
    usefulDataArr.push(newObj);
  });
  return usefulDataArr;
}
