/** @format */

import React, { useEffect, useState } from "react";
import CarouselBtn from "../Features/CarouselBtn";
import "./review.styles.scss";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideLeft = () => {
    setActiveIndex(activeIndex - 1);

    if (activeIndex <= 0) {
      setActiveIndex(3);
    }
  };

  const slideRight = () => {
    setActiveIndex(activeIndex + 1);

    if (activeIndex >= 3) {
      setActiveIndex(0);
    }
  };

  return (
    <div className="review-container" id="reviews">
      <div className="review-contents">
        <div className="review-img-container">
          <div
            className="review-img"
            style={{ transform: `translateY(${-activeIndex * 101}%)` }}>
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user"
            />
            <img
              src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="user"
            />
            <img
              src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user"
            />
            <img
              src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user"
            />
          </div>
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
              details={{
                name: "Gerald Foka",
                desp: "",
                rating: 4.5,
              }}
            />
            <ReviewItem
              details={{
                name: "Nataliya",
                desp: "",
                rating: 4,
              }}
            />
            <ReviewItem
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
