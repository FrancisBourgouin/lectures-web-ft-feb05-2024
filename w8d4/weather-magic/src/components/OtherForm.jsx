import useFormData from "../hooks/useFormData";

export default function OtherForm(props) {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };

  const {formData, handleChange, handleSubmit} = useFormData(initialData)
  return (
    <form>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="text"
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
    </form>
  );
}
