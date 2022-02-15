/** @format */

import React from "react";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-contents">
        {/* <div className="brand-logo">
          <img src="" alt="" />
        </div> */}
        <div className="navbar-items">
          <ul>
            <li>
              <a href="#booking"> Booking </a>
            </li>
            <li>
              <a href="#rooms"> Rooms </a>
            </li>
            <li>
              <a href="#facilities"> Facilities </a>
            </li>
            <li>
              <a href="#reviews"> Reviews </a>
            </li>
            <li>
              <a href="#support"> Support </a>
            </li>
            {/* <li>
              <a href="/"> Sign in </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
