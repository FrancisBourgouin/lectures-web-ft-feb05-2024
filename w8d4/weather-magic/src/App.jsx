import logo from "./logo.svg";
import "./App.scss";
import WeatherSearch from "./components/WeatherSearch";
import SearchHistory from "./components/SearchHistory";
import CurrentWeather from "./components/CurrentWeather";
import useWeather from "./hooks/useWeather";

function App() {
  const { weatherData, cityHistory, updateInfo, fetchWeatherFromButton } = useWeather();

  return (
    <div className="App">
      <header>
        <h1>Super Weather App 🌩️🌪️🌞</h1>
      </header>
      <main>
        <WeatherSearch onSubmit={updateInfo} />
        <SearchHistory
          cityHistory={cityHistory}
          fetchWeatherFromButton={fetchWeatherFromButton}
        />
        {weatherData && <CurrentWeather weatherData={weatherData} />}
      </main>
    </div>
  );
}

export default App;
