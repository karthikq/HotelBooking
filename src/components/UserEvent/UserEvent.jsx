/** @format */
import React, { useState } from "react";
import "./userevent.styles.scss";
import toast, { Toaster } from "react-hot-toast";

const UserEvent = () => {
  const [userEmail, setuserEmail] = useState("");
  const [err, setErr] = useState(false);

  const formRef = React.useRef();
  return (
    <div className="userevent-container" id="support">
      <div className="userevent-contents">
        <h6>
          Subscribe & <br /> get special discount
        </h6>
        <span className="userevent-span">
          Don’t wanna miss something? Subscribe right now and get the special
          discount and monthly newsletter
        </span>
        <div className="input-bar">
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
