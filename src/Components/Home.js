import React from "react";
import "./Home.css";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";

function Home(props) {
  console.log(props.Mode);
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

            <input type="submit" className="search__button btn btn-primary" value="Search" />
          </div>
        </div>
      </form>

      <div className="Jobposts">
            <div>
                
            </div>
      </div>
    </div>
  );
}

export default Home;
