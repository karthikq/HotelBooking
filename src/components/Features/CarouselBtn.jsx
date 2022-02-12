/** @format */

import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
const CarouselBtn = ({ slideLeft, slideRight }) => {
  return (
    <div>
      {" "}
      <div className="features-carousel-btns">
        <RiArrowLeftSLine className="arrow-icon" onClick={slideLeft} />
        <RiArrowRightSLine className="arrow-icon" onClick={slideRight} />
      </div>
    </div>
  );
};

export default CarouselBtn;
