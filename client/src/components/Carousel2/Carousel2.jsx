import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel2 = () => {
  const items = [
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393895/Geosmin/Mushroom1.jpg' className="sliderimg" alt=''/>,
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393894/Geosmin/Mushroom4.jpg' className="sliderimg" alt=''/>,
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393895/Geosmin/Mushroom2.jpg' className="sliderimg" alt=''/>,
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393950/Geosmin/Mushroom6.jpg' className="sliderimg" alt=''/>,
  ];

  return (
    <div className="carousel-images">
      <AliceCarousel
      animationType='fadeout'
        autoPlay
        animationDuration='600'
        autoPlayInterval='5000'
        items={items}
        disableDotsControls="true"
        disableButtonsControls="true"
        infinite="true"
      />
    </div>
  );
};

export default Carousel2;
