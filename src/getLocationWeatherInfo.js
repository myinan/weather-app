async function getWeather(location = "Bursa") {
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

export default getWeather;
