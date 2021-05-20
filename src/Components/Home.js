import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Home.css";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";

function Home(props) {
  //   console.log(props.Mode);

  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        `https://jobs.github.com/positions.json?description=python&location=USA`
      );
      setData(response.data);
      // console.log(response.data)
    };

    fetchData();
  }, []);
  console.log(Data);
  return (
    <div className="Home">
      <form>
        <div className="Searchbar card shadow">
          <div className="Searchbar__items">
            <SearchIcon />
            <input
              type="text"
              className="search__input"
              placeholder="Search by title, companies, expertise"
            />
          </div>

          <div className="Searchbar__items">
            <RoomIcon />
            <input
              className="search__input"
              type="text"
              placeholder="Search by title, companies, expertise"
            />
          </div>

          <div className="Searchbar__items">
            <input
              type="radio"
              id="full-time"
              name="gender"
              value="full-time"
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
        {
            Data.map((item)=>(<div className="Job_Card card shadow">
            <div ><img className="Jobposts__img" src={item.company_logo}/></div>
            <div className="Jobposts__desc">
              <div style={{display:"flex",flexDirection:"row"}}>
                <p style={{ color: "grey", fontSize: "20px" }}></p>
                <p style={{ color: "grey", fontSize: "10px",margin:"7px" }}>⚫</p>
                <p style={{ color: "grey", fontSize: "20px" }}>{item.type}</p>
              </div>
              <h4>{item.title}</h4>
              <p style={{ color: "grey", fontSize: "20px", marginTop:"15px" }}>{item.company} </p>
              <p style={{ color: "blue", fontSize: "20px" }}>{item.location}</p>
            </div>
          </div>))
        }
      </div>
    </div>
  );
}

export default Home;
