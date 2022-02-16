/** @format */

import React, { useState } from "react";
import Allrooms from "../components/AllRooms/Allrooms";
import Facilities from "../components/Facilities/Facilities";
import Featureslist from "../components/Features/Featureslist";
import Reviews from "../components/Reviews/Reviews";
import UserEvent from "../components/UserEvent/UserEvent";

import "react-datepicker/dist/react-datepicker.css";
import "./home.styles.scss";

import DatePicker from "react-datepicker";
import svgbg from "./blob.svg";
const Home = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="home-container">
      <div className="home-contents">
        <div className="home-details">
          <h1>
            <img className="blog-svg" src={svgbg} alt="svg" />
            Find suitable room in Hotel, Just search here
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
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="search-item">
            <i className="gg-calendar-dates"></i>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="search-item" id="booking">
            <i className="gg-profile"></i>
            <select name="" id="">
              <option value="2">2 Adults - 1 Child </option>
              <option value="1">4 Adults - 2 Child</option>
              <option value="3">2 Adults - 2 Child</option>
            </select>
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
      <UserEvent />
    </div>
  );
};

export default Home;
