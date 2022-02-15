/** @format */
import React from "react";
import "./userevent.styles.scss";

const UserEvent = () => {
  return (
    <div className="userevent-container" id="support">
      <div className="userevent-contents">
        <h6>
          Subscribe & <br /> get special discount
        </h6>
        <span>
          Don’t wanna miss something? Subscribe right now and get the special
          discount and monthly newsletter
        </span>
        <div className="input-bar">
          <input type="email" required placeholder="Enter email address" />
          <div className="submit-text">
            <a href="mailto:karthikjs10@gmail.com">Submit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEvent;
