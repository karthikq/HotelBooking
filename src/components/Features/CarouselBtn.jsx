/** @format */

import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
const CarouselBtn = ({ slideLeft, slideRight, className }) => {
  return (
    <div>
      <div className={`features-carousel-btns ${className}`}>
        <RiArrowLeftSLine className="arrow-icon" onClick={slideLeft} />
        <RiArrowRightSLine className="arrow-icon" onClick={slideRight} />
      </div>
    </div>
  );
};

export default CarouselBtn;
