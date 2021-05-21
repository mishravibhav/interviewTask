import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import JobDesc from "./Components/JobDesc";
import axios from "axios";

function App() {
  const [dark, setDark] = useState(false);
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://jobs.github.com/positions.json`
      );
      setData(response.data);
      // console.log(response.data)
    };
    fetchData();
  }, []);

  // const handleJob =(e)=>{
  //   console.log(e)
  // }
  return (
    <Router>
      <div className={dark ? "App dark__mode" : "App"}>
        <div className="Navbar">
          <div className="Navbar__Items">
            <Link style={{textDecoration:"none"}} to="/">
              <div className="Logo">devjobs</div>
            </Link>

            <div className="theme__button">
              <label class="switch">
                <input type="checkbox" onChange={() => setDark(!dark)} />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home Mode={dark} data={Data} />
          </Route>

          <Route path="/Jobdesc">
            <JobDesc props={Data} Mode={dark} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
