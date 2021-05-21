import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Home.css";
import JobDesc from "./JobDesc";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import { Link } from "react-router-dom";

function Home(props) {
    console.log(props);

  const [Data, setData] = useState([]);
  const [Search, setSearch] = useState("");
  const [Location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(Search, Location, type);

    const fetchData = async () => {
      const response = await Axios.get(
        `https://jobs.github.com/positions.json?description=${Search}&location=${Location}&type=${type}`
      );
      setData(response.data);
      // console.log(response.data)
    };

    fetchData();
  };

  const msToTime = (duration) => {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 30);
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (days == 0 && hours == 0 && minutes == 0) {
      return seconds + " seconds " + " ago ";
    } else if (days == 0 && hours == 0) {
      return minutes + " minutes " + " ago ";
    } else if (days == 0) {
      return hours + " hours " + " ago ";
    } else {
      if (days == 1) {
        return days + " day " + " ago ";
      } else {
        return days + " days " + " ago ";
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        `https://jobs.github.com/positions.json`
      );
      setData(response.data);
      // console.log(response.data)
    };

    fetchData();
  }, []);
  console.log(Data);
  return (
    <div className="Home">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="Searchbar card shadow">
          <div className="Searchbar__items">
            <SearchIcon />
            <input
              type="text"
              className="search__input"
              placeholder="Search by title, companies, expertise"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="Searchbar__items">
            <RoomIcon />
            <input
              className="search__input"
              type="text"
              placeholder="Search by title, companies, expertise"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="Searchbar__items">
            <input
              type="radio"
              id="full-time"
              name="type"
              value="Full Time"
              onChange={(e) => setType(e.target.value)}
            />
            <label for="full-time">Full Time Only</label>

            <input
              type="submit"
              className="search__button btn btn-primary"
              value="Search"
            />
          </div>
        </div>
      </form>

      <div className="Jobposts">
        {Data.map((item) => (
          

            <div className="Job_Card card shadow">
              <div>
                <img className="Jobposts__img" src={item.company_logo} />
              </div>
              <div className="Jobposts__desc">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ color: "grey", fontSize: "20px" }}>
                    {msToTime(Date.now() - Date.parse(item.created_at))}
                  </p>
                  <p style={{ color: "grey", fontSize: "10px", margin: "7px" }}>
                    ⚫
                  </p>
                  <p style={{ color: "grey", fontSize: "20px" }}>{item.type}</p>
                </div>
                <Link to={`/Jobdesc/${item.id}` } key={item.id} >
                <h4>{item.title}</h4>
                </Link>
                <p
                  style={{ color: "grey", fontSize: "20px", marginTop: "15px" }}
                >
                  {item.company}
                </p>
                <p style={{ color: "blue", fontSize: "20px" }}>
                  {item.location}
                </p>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default Home;
