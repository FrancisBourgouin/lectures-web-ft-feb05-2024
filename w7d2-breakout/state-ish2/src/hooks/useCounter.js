import { useState } from "react";

export default function useCounter(startingValue) {
  const [count, setCount] = useState(startingValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return [count, increment, decrement];
}
