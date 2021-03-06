/** @format */

import React, { useRef, useState } from "react";
import "./features.styles.scss";

import { useSwipeable } from "react-swipeable";

import "swiper/css";
import "swiper/css/navigation";

import Room from "../AllRooms/Room";

import { Roomitems } from "../RoomItems";
import CarouselBtn from "./CarouselBtn";
import { AosInit } from "../AosInit";

const Featureslist = () => {
  const [activeElement, setActiveelement] = useState(Roomitems[0]);

  const ref = useRef();

  const slideLeft = () => {
    ref.current.scrollLeft -= 500;
  };
  const slideRight = () => {
    ref.current.scrollLeft += 500;
  };

  const handlers = useSwipeable({
    onSwipedRight: slideRight,
    onSwipedLeft: slideLeft,
  });
  AosInit();

  return (
    <div className="features-container" id="features">
      <header className="features-header">
        <h5 data-aos="fade-right">
          Save an extra 5-10% <br /> on every room booking
        </h5>
        <div data-aos="fade-left">
          <CarouselBtn
            slideLeft={slideLeft}
            slideRight={slideRight}
            className="features-btn"
          />
        </div>
      </header>

      <div className="features-contents">
        <div className="features-item-list">
          <ul>
            <li
              className={activeElement.id === 1 ? "li-active" : null}
              onMouseEnter={() => setActiveelement(Roomitems[0])}>
              Bedroom
            </li>
            <li
              className={activeElement.id === 2 ? "li-active" : null}
              onMouseEnter={() => setActiveelement(Roomitems[1])}>
              Metting Room
            </li>
            <li
              className={activeElement.id === 3 ? "li-active" : null}
              onMouseEnter={() => setActiveelement(Roomitems[2])}>
              Guests Room
            </li>
            <li
              className={activeElement.id === 4 ? "li-active" : null}
              onMouseEnter={() => setActiveelement(Roomitems[3])}>
              Workspaces
            </li>
            <li
              className={activeElement.id === 5 ? "li-active" : null}
              onMouseEnter={() => setActiveelement(Roomitems[4])}>
              Gym Center
            </li>
            <li
              className={activeElement.id === 6 ? "li-active" : null}
              onMouseEnter={() => setActiveelement(Roomitems[5])}>
              Swimming Pool
            </li>
          </ul>
        </div>{" "}
        <CarouselBtn
          slideLeft={slideLeft}
          slideRight={slideRight}
          className="features-btn-2"
        />
        <div {...handlers} ref={ref} className="features-item-carousel">
          {activeElement.list &&
            activeElement?.list.map((item, index) => (
              <Room
                key={index}
                details={{
                  img: item.img,
                  name: item.name,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Featureslist;
