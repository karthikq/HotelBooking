/** @format */

import React, { useEffect, useState } from "react";
import "./allrooms.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Room from "./Room";

const Allrooms = () => {
  const [slides, setSlides] = useState(4);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1500) {
        setSlides(3);
      }
      if (window.innerWidth < 1100) {
        setSlides(2);
      }
    });
    if (window.innerWidth < 1500) {
      setSlides(3);
    }
    if (window.innerWidth < 1100) {
      setSlides(2);
    }
  }, []);

  return (
    <div className="allrooms-container">
      <div className="allrooms-contents">
        <header className="allrooms-header">
          <h2>
            Rooms we recommend <br />
            for our customers
          </h2>
          <p className="allrooms-header-ptag">View All Rooms</p>
        </header>
        <div className="allrooms-list">
          <Swiper
            slidesPerView={slides}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <div className="swiper-item">
                <Room
                  details={{
                    img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    price: "",
                    name: "",
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <Room
                  details={{
                    img: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    price: "",
                    name: "",
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Room
                details={{
                  img: "https://images.pexels.com/photos/1327389/pexels-photo-1327389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                  price: "",
                  name: "",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <Room
                  details={{
                    img: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    price: "",
                    name: "",
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <Room
                  details={{
                    img: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    price: "",
                    name: "",
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <Room
                  details={{
                    img: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    price: "",
                    name: "",
                  }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Allrooms;
