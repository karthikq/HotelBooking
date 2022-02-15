/** @format */
import React from "react";
import "./facilities.styles.scss";
import Items from "./Items";

const Facilities = () => {
  return (
    <div className="facilities-container" id="facilities">
      <div className="facilities-contents">
        <h3>
          See the facilities we <br /> provide in real time
        </h3>
        <div className="facilities-list">
          <div className="facilities-row">
            <p>Outdoor Workspace</p>
            <p>Swimming Pool</p>
            <p>Private Workspace</p>
          </div>
          <div className="facilities-row">
            <p>Parking Area</p>
            <p>Free Wifi</p>
            <p>Breakfast</p>
          </div>
          <div className="facilities-row">
            <p>Free Electricity</p>
            <p>Laundry Service</p>
            <p>Others</p>
          </div>
        </div>
      </div>
      <Items />
    </div>
  );
};

export default Facilities;
