export default function SearchHistory(props) {
  const { cityHistory, fetchWeatherFromButton } = props;

  const parsedCities =
    Array.isArray(cityHistory) &&
    cityHistory.map((city) => (
      <li key={city}>
        <button onClick={() => fetchWeatherFromButton(city)}>{city}</button>
      </li>
    ));

  return (
    <section className="SearchHistory">
      <ul>{parsedCities}</ul>
    </section>
  );
}
