/** @format */

import React from "react";
import { AosInit } from "../AosInit";

export const Item = ({ id, details }) => {
  AosInit();
  return (
    <div
      className={id % 2 === 0 ? "items-list items-list-reverse" : "items-list"}>
      <div
        data-aos={id % 2 === 0 ? "fade-left" : "fade-right"}
        className="item-img">
        <img src={details.img} alt="error" />
      </div>
      <div
        className="item-details"
        data-aos={id % 2 === 0 ? "fade-left" : "fade-right"}>
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
