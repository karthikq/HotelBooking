/** @format */

import React, { useContext, useState } from "react";
import "./navbar.styles.scss";
import { BiMenu } from "react-icons/bi";
import { NavContext } from "../context/Nav";

const Navbar = () => {
  const { value, data } = useContext(NavContext);
  console.log(value);
  return (
    <>
      <div className="navbar-container">
        <div
          className={
            value ? "navbar-mobile navbar-mobile-active" : "navbar-mobile"
          }
          onClick={() => data(!value)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={
            value ? "nav-circle nav-circle-active" : "nav-circle"
          }></div>
        <div
          className={
            value
              ? "navbar-contents  navbar-contents-active"
              : "navbar-contents"
          }>
          {/* <div className="brand-logo">
          <img src="" alt="" />
        </div> */}
          <div className="navbar-items">
            <ul>
              <li>
                <a href="#booking" onClick={() => data(false)}>
                  Booking
                </a>
              </li>
              <li>
                <a href="#rooms" onClick={() => data(false)}>
                  Rooms
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={() => data(false)}>
                  Facilities
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={() => data(false)}>
                  Reviews
                </a>
              </li>
              <li>
                <a href="#support" onClick={() => data(false)}>
                  Support
                </a>
              </li>
              {/* <li>
              <a href="/"> Sign in </a>
            </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
