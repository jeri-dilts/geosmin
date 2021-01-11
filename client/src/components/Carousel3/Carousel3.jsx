import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { NavLink } from "react-router-dom";

const Carousel3 = () => {
  const items = [
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393950/Geosmin/Mushroom5.jpg' className="sliderimg" alt=''/>,
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393895/Geosmin/Mushroom1.jpg' className="sliderimg" alt=''/>,
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393885/Geosmin/Microgreen2.jpg' className="sliderimg" alt=''/>,
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393885/Geosmin/Microgreen3.jpg' className="sliderimg" alt=''/>,
  ];

  return (
    <div className="carousel-images">
      <NavLink to="/products">
        <AliceCarousel
          animationType="fadeout"
          autoPlay
          animationDuration='600'
          autoPlayInterval='5000'
          items={items}
          disableDotsControls="true"
          disableButtonsControls="true"
          infinite="true"
        />
      </NavLink>
    </div>
  );
};

export default Carousel3;
