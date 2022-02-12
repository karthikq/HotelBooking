/** @format */

import React from "react";
import StarRatings from "react-star-ratings";

const ReviewItem = ({ details }) => {
  return (
    <React.Fragment>
      <div className="review-item">
        <p>{details.name}</p>
        <StarRatings
          rating={details.rating}
          starDimension="18px"
          starSpacing="5px"
          starRatedColor="yellow"
          numberOfStars={5}
          name="rating"
        />
        <span>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. At amet
          molestie augue quis at. Enim, vulputate nibh morbi magnis placerat
          posuere.”
        </span>
      </div>
    </React.Fragment>
  );
};

export default ReviewItem;
