/** @format */

import React, { useContext, useState } from "react";
import "./navbar.styles.scss";

import { NavContext } from "../context/Nav";

const Navbar = () => {
  const { value, data } = useContext(NavContext);
  const [liState, setLiState] = useState(false);
  return (
    <>
      <div className="navbar-container">
        <div
          className={
            value ? "navbar-mobile navbar-mobile-active" : "navbar-mobile"
          }
          onClick={() => {
            setLiState(!liState);
            setTimeout(() => {
              data(!value);
            }, 500);
          }}>
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
          <div className="navbar-items ">
            <ul>
              <li
                style={
                  liState
                    ? { animation: "FadeIn 1s ease-In 0.5s" }
                    : { animation: "FadeOut 1s ease-Out 0.5s" }
                }>
                <a href="#booking" onClick={() => data(false)}>
                  Booking
                </a>
              </li>
              <li
                style={
                  liState
                    ? { animation: "FadeIn 1s ease-In 0.6s" }
                    : { animation: "FadeOut 1s ease-Out 0.6s" }
                }>
                <a href="#rooms" onClick={() => data(false)}>
                  Rooms
                </a>
              </li>
              <li
                style={
                  liState
                    ? { animation: "FadeIn 1s ease-In 0.7s" }
                    : { animation: "FadeOut 1s ease-Out 0.7s" }
                }>
                <a href="#facilities" onClick={() => data(false)}>
                  Facilities
                </a>
              </li>
              <li
                style={
                  liState
                    ? { animation: "FadeIn 1s ease-In 0.8s" }
                    : { animation: "FadeOut 1s ease-Out 0.8s" }
                }>
                <a href="#reviews" onClick={() => data(false)}>
                  Reviews
                </a>
              </li>
              <li
                style={
                  liState
                    ? { animation: "FadeIn 1s ease-In 0.9s" }
                    : { animation: "FadeOut 1s ease-Out 0.9s" }
                }>
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
