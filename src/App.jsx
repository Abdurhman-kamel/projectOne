import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import  '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="btn btn-warning">loading...</button>
      <div>
        <i className="fa-solid fa-trash"></i>
        hello world
      </div>
    </>
  );
}

export default App;
