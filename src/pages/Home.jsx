/** @format */

import React from "react";
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
            <span>Check in</span>
          </div>
          <div className="search-item">
            <span>Check out</span>
          </div>
          <div className="search-item">
            <span>Adults</span>
          </div>
        </div>
        <div className="search-text">
          <span>Search</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
