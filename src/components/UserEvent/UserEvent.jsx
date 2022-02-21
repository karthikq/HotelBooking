/** @format */
import React, { useState } from "react";
import "./userevent.styles.scss";
import toast, { Toaster } from "react-hot-toast";
import { AosInit } from "../AosInit";

const UserEvent = () => {
  const [userEmail, setuserEmail] = useState("");
  const [err, setErr] = useState(false);

  AosInit();

  return (
    <div className="userevent-container" id="support">
      <div className="userevent-contents">
        <h6 data-aos="fade-up">
          Subscribe & <br /> get special discount
        </h6>
        <span
          data-aos="fade-up"
          data-aos-delay="0.5s"
          className="userevent-span">
          Don’t wanna miss something? Subscribe right now and get the special
          discount and monthly newsletter
        </span>
        <div data-aos="fade-up" data-aos-delay="0.8s" className="input-bar">
          <input
            type="email"
            required
            onChange={(e) => setuserEmail(e.target.value)}
            value={userEmail}
            placeholder="Enter email address"
          />
          <div
            className="submit-text"
            onClick={() => {
              userEmail ? (
                <>
                  {toast.success(`Thanks for subscribtion ${userEmail}`)}
                  {setErr(false)}
                </>
              ) : (
                setErr(true)
              );
            }}>
            Submit
          </div>
          <Toaster />
        </div>
        <span className="err">{err ? "*Required" : ""}</span>
      </div>
    </div>
  );
};

export default UserEvent;
