/** @format */

import React, { useRef, useState } from "react";
import "./features.styles.scss";

import { useSwipeable } from "react-swipeable";

import "swiper/css";
import "swiper/css/navigation";

import Room from "../AllRooms/Room";

import { Roomitems } from "../RoomItems";
import CarouselBtn from "./CarouselBtn";

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

  return (
    <div className="features-container">
      <header className="features-header">
        <h5>
          Save an extra 5-10% <br /> on every room booking
        </h5>
        <CarouselBtn slideLeft={slideLeft} slideRight={slideRight} />
      </header>

      <div className="features-contents">
        <div className="features-item-list">
          <ul>
            <li
              className={activeElement.id === 1 && "li-active"}
              onMouseEnter={() => setActiveelement(Roomitems[0])}>
              Bedroom
            </li>
            <li
              className={activeElement.id === 2 && "li-active"}
              onMouseEnter={() => setActiveelement(Roomitems[1])}>
              Metting Room
            </li>
            <li
              className={activeElement.id === 3 && "li-active"}
              onMouseEnter={() => setActiveelement(Roomitems[2])}>
              Guests Room
            </li>
            <li
              className={activeElement.id === 4 && "li-active"}
              onMouseEnter={() => setActiveelement(Roomitems[3])}>
              Workspaces
            </li>
            <li
              className={activeElement.id === 5 && "li-active"}
              onMouseEnter={() => setActiveelement(Roomitems[4])}>
              Gym Center
            </li>
            <li
              className={activeElement.id === 6 && "li-active"}
              onMouseEnter={() => setActiveelement(Roomitems[5])}>
              Swimming Pool
            </li>
          </ul>
        </div>
        <div {...handlers} ref={ref} className="features-item-carousel">
          {activeElement.list &&
            activeElement?.list.map((item) => (
              <Room
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
