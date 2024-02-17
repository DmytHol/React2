import logo from "/vite.svg";
import { useState } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);
  return (
    <header>
      <h2>
        <img src={logo} alt="Vite Logo" />
        Learning React App
      </h2>

      <span>time is: {now.toLocaleTimeString()}</span>
    </header>
  );
}
