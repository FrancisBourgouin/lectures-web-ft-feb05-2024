import { useState } from "react";

export default function useFormData(initialData, onSubmit) {
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);

    setFormData(initialData);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  return { formData, handleChange, handleSubmit };
}
