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
            <li>Booking</li>
            <li>Facilities</li>
            <li>Support</li>
            <li>Rooms</li>
            <li>Reviews</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
