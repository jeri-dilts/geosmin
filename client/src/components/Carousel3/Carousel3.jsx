import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./Images/Mushroom1.jpg";
import image2 from "./Images/Mushroom2.jpg";
import image3 from "./Images/Microgreen1.jpg";
import image4 from "./Images/Microgreen2.jpg";
import { NavLink } from "react-router-dom";

const Carousel3 = () => {
  const items = [
    <img src={image1} className="sliderimg" />,
    <img src={image2} className="sliderimg" />,
    <img src={image3} className="sliderimg" />,
    <img src={image4} className="sliderimg" />,
  ];

  return (
    <div className="carousel-images">
      <NavLink to="/products">
        <AliceCarousel
          animationType="fade"
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
