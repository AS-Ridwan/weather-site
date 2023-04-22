const API_KEY = `d01ceaa8723e46febfda3fbe05b05cd8`;

const loadTemperature = () => {
  const countryInput = document.getElementById("country-input").value;
  document.getElementById("country-input").value = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryInput}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temp) => {
  // console.log(temp);
  setInnerText("city", temp.name);
  setInnerText("temprature", temp.main.temp);
  setInnerText("weather", temp.weather[0].main);

  // weather img
  const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute("src", url);
};
