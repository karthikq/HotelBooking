/** @format */

import React, { useEffect, useState } from "react";
import CarouselBtn from "../Features/CarouselBtn";
import "./review.styles.scss";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userImg, setUserImg] = useState(
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  );

  const slideLeft = () => {
    setActiveIndex(activeIndex - 1);
    updateImage();
    if (activeIndex <= 0) {
      setActiveIndex(3);
    }
  };

  const slideRight = () => {
    setActiveIndex(activeIndex + 1);

    updateImage();
    if (activeIndex >= 3) {
      setActiveIndex(0);
    }
  };
  const updateImage = () => {
    if (activeIndex === 0) {
      setUserImg(
        "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    } else if (activeIndex === 1) {
      setUserImg(
        "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      );
    } else if (activeIndex === 2) {
      setUserImg(
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    } else if (activeIndex === 3) {
      setUserImg(
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    }
  };
  useEffect(() => {
    updateImage();
  }, []);
  return (
    <div className="review-container">
      <div className="review-contents">
        <div className="review-img">
          <img src={userImg} alt="user" />
        </div>
        <div className="review-details">
          <div
            className="review-details-contents"
            style={{ transform: `translateX(${-activeIndex * 100}%)` }}>
            <ReviewItem
              details={{
                name: "Nikola Jelica",

                desp: "",
                rating: 5,
              }}
            />
            <ReviewItem
              updateImg={updateImage}
              details={{
                name: "Gerald Foka",

                desp: "",
                rating: 4.5,
              }}
            />
            <ReviewItem
              updateImg={updateImage}
              details={{
                name: "Benedicte Rajya",

                desp: "",
                rating: 4,
              }}
            />
            <ReviewItem
              updateImg={updateImage}
              details={{
                name: "Tony",

                desp: "",
                rating: 5,
              }}
            />
          </div>
          <CarouselBtn slideLeft={slideLeft} slideRight={slideRight} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
