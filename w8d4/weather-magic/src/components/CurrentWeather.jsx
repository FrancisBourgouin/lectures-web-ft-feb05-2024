export default function CurrentWeather(props) {
  const {weatherData} = props

  const convertedTemp = Math.round(weatherData.main.temp - 273.15)
  return (
    <section className="CurrentWeather">
      <h1>Weather for {weatherData.currentCity}</h1>
      <h2>Currently at {convertedTemp}°C</h2>
      <p>The conditions are: {weatherData.weather[0].description}</p>
    </section>
  );
}
