import { useState } from "react";
import axios from "axios";
import useWow from "./useWow";

export default function useWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityHistory, setCityHistory] = useState([]);
  const { sayWow } = useWow();

  const updateInfo = (formData) => {
    const { city } = formData;
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
    axios
      .get(weatherUrl)
      .then((res) => res.data)
      // .then(setWeatherData)
      .then((data) => {
        data.currentCity = city;
        // !cityHistory.includes(city) && setCityHistory([...cityHistory, city]);
        if (!cityHistory.includes(city)) {
          setCityHistory([...cityHistory, city]);
        }

        setWeatherData(data);
      })
      .catch((err) => console.log(err));
  };

  const fetchWeatherFromButton = (city) => {
    updateInfo({ city });
    sayWow();
  };

  return {
    cityHistory,
    weatherData,
    updateInfo,
    fetchWeatherFromButton,
  };
}
