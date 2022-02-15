/** @format */
import React, { useState } from "react";
import "./userevent.styles.scss";
import toast, { Toaster } from "react-hot-toast";

const UserEvent = () => {
  const [userEmail, setuserEmail] = useState("");
  const formRef = React.useRef();
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

        <form
          ref={formRef}
          onSubmit={(e) => e.preventDefault()}
          className="input-bar">
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
              formRef.current.submit();
              userEmail &&
                toast.success(`Thanks for subscribtion ${userEmail}`);
            }}>
            Submit
          </div>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default UserEvent;
