import React, { useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import "./jobdesc.css";

function JobDesc(props) {
  let location = useLocation();
  var value = location.pathname.split("/");

  var desc = props.props.filter((item) => item.id == value[2]);
  console.log(props);

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

  return (
    <div>
      <div className={props.Mode ? "card shadow company__info darkMode":"card shadow company__info"}>
        <div>
          <img className="company__info__left" src={desc[0].company_logo} />
        </div>
        <div className="company__info__right">
          <h3>{desc[0].company}</h3>
        </div>
        <div>
          <button
            className="btn btn-secondary "
            style={{ marginRight: "100px", marginTop: "50px" }}
          >
            Company Site
          </button>
        </div>
      </div>
      <div className={props.Mode ?"card shadow jobdesc darkMode":"card shadow jobdesc"}>
        <div className="job__info">
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ color: "grey", fontSize: "20px" }}>
                {msToTime(Date.now() - Date.parse(desc[0].created_at))}
              </p>
              <p style={{ color: "grey", fontSize: "10px", margin: "7px" }}>
                ⚫
              </p>
              <p style={{ color: "grey", fontSize: "20px" }}>{desc[0].type}</p>
            </div>

            <h4>{desc[0].title}</h4>

            <p style={{ color: "blue", fontSize: "20px" }}>
              {desc[0].company},{desc[0].location}
            </p>
          </div>
          <div>
            <button className="btn btn-primary mt-4">Apply Now</button>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: desc[0].description }}></div>
      </div>

      <div className="card shadow How_to_apply">
        <h4 style={{ marginBottom: "30px" }}>How To Apply</h4>
        <p dangerouslySetInnerHTML={{ __html: desc[0].how_to_apply }}></p>
      </div>
    </div>
  );
}

export default JobDesc;
