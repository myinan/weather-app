const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const errorText = document.querySelector(".error-text");

let usefulDataArr = [];
searchBtn.addEventListener("click", getCityInfo);

async function getCityInfo() {
  if (!checkInput()) return;
  const weatherData = await getWeather(searchInput.value);
  const forecastDaysArr = Array.from(weatherData.forecast.forecastday);
  usefulDataArr = createUsefulDataArr(
    forecastDaysArr,
    weatherData.location.name,
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
  try {
    const responseForecast = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=d5756cd98907479bb82210421240601&q=${location}&days=3`,
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
    usefulDataArr.push(newObj);
  });
  return dataArr;
}

export { usefulDataArr };
