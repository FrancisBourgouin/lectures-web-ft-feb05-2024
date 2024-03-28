import useFormData from "../hooks/useFormData";

export default function WeatherSearch(props) {
  const { onSubmit } = props;

  const initialData = { city: "" };

  const { formData, handleChange, handleSubmit } = useFormData(initialData, onSubmit);

  return (
    <section className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="city"
          placeholder="Enter the city name"
          value={formData.city}
        />
        <button>Fetch weather!</button>
      </form>
    </section>
  );
}
