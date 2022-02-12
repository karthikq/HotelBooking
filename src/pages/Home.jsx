/** @format */

import React from "react";
import Allrooms from "../components/AllRooms/Allrooms";
import Facilities from "../components/Facilities/Facilities";
import Featureslist from "../components/Features/Featureslist";
import Reviews from "../components/Reviews/Reviews";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-contents">
        <div className="home-details">
          <h1>
            Find suitable <br /> room in Hotel, <br /> Just search here
          </h1>
          <span>
            The right property for you.big range of top-rated properties. Price
            guarantee.
          </span>
        </div>
        <div className="home-img">
          <img src="https://i.ibb.co/W53CvrF/Group-9.png" alt="err" />
        </div>
      </div>
      <div className="search-bar">
        <div className="search-contents">
          <div className="search-item">
            <i className="gg-calendar-dates"></i>
            <span>Check in</span>
          </div>
          <div className="search-item">
            <i className="gg-calendar-dates"></i>
            <span>Check out</span>
          </div>
          <div className="search-item">
            <i className="gg-profile"></i>
            <span>Adults</span>
          </div>
        </div>
        <div className="search-text">
          <span>Search</span>
        </div>
      </div>
      <Allrooms />
      <Facilities />
      <Featureslist />
      <Reviews />
    </div>
  );
};

export default Home;
