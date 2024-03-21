import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const [count, increment, decrement] = useCounter(0);

  return (
    <>
      <img src="" alt="" />
      <header>
        <h1>Count is {count}</h1>
      </header>
      <button onClick={increment}>Increment count</button>
    </>
  );
}

export default App;
