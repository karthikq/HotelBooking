/** @format */

import React from "react";
import { AosInit } from "../AosInit";
import { Item } from "./Item";

const Items = () => {
  AosInit();
  return (
    <div className="items-container">
      <h4 data-aos="fade-up">
        We organize the most popular facilities to our customers
      </h4>
      <div className="items-contents">
        <Item
          id={1}
          details={{
            img: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            name: "Restaurant",
            desp: "",
          }}
        />
        <Item
          id={2}
          details={{
            img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            name: "GYM Center",
            desp: "",
          }}
        />
        <Item
          id={3}
          details={{
            img: "https://images.pexels.com/photos/7294621/pexels-photo-7294621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            name: "Swimming Pool",
            desp: "",
          }}
        />
      </div>
    </div>
  );
};

export default Items;
