const searchInput = document.querySelector("form > input");
const searchBtn = document.querySelector("form > button");

searchBtn.addEventListener("click", searchCity);

async function searchCity() {
  const weatherData = await getWeather(searchInput.value);
  const forecastDaysArr = Array.from(weatherData.forecast.forecastday);
  console.log(createUsefulDataArr(forecastDaysArr));
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
