/** @format */

import React from "react";

export const Item = ({ id, details }) => {
  return (
    <div
      className={id % 2 === 0 ? "items-list items-list-reverse" : "items-list"}>
      <div className="item-img">
        <img src={details.img} alt="error" />
      </div>
      <div className="item-details">
        <p>{details.name}</p>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A esse
          delectus nam quos commodi eveniet magni officiis vel illo id!{" "}
        </span>
        <button>Visit Now</button>
      </div>
    </div>
  );
};
