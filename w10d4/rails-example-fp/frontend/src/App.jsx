import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // const originalUsers = [
    //   { id: 1, name: "Bob", password: "1234" },
    //   { id: 2, name: "Pequeno Pollo", password: "pockpock" },
    // ];
    // setUsers(originalUsers);

    axios
      .get("/api/users")
      .then((res) => res.data)
      .then(setUsers);

  }, []);

  const parsedUsers =
    Array.isArray(users) &&
    users.map((user) => (
      <li key={user.id}>
        User ID #{user.id} {user.name}
      </li>
    ));

  return (
    <>
      <header>
        <h1>USER LIST OF DESTINY ! :D</h1>
        <h2>Serving X users since 13:37</h2>
      </header>
      <ul>{parsedUsers}</ul>
    </>
  );
}

export default App;
