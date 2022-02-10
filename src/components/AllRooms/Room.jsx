/** @format */

import React from "react";

const Room = ({ details }) => {
  return (
    <div className="allrooms-box">
      <img src={details.img} alt="err" />
      <div className="allrooms-item-text">
        <p>Delux Room</p>
        <span>Price</span>
      </div>
    </div>
  );
};

export default Room;
