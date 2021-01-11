import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const items = [
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393885/Geosmin/Microgreen1.jpg' className="sliderimg" alt='' />,
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393885/Geosmin/Microgreen2.jpg' className="sliderimg" alt='' />,
    <img src='https://res.cloudinary.com/decd84s0g/image/upload/v1610393885/Geosmin/Microgreen3.jpg' className="sliderimg" alt='' />,
  ];

  return (
    <div className="carousel-images">
      <AliceCarousel
        items={items}
        animationType='fadeout'
        autoPlay
        animationDuration='600'
        autoPlayInterval='5000'
        disableDotsControls="true"
        disableButtonsControls="true"
        infinite="true"
      />
    </div>
  );
};

export default Carousel;
