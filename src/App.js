import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "App dark__mode" : "App"}>
      <div className="Navbar">
        <div className="Navbar__Items">
          <div className="Logo">devjobs</div>

          <div className="theme__button">
            <label class="switch">
              <input type="checkbox" onChange={() => setDark(!dark)} />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>


      <Home Mode={dark} />
    </div>
  );
}

export default App;
