import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./Images/Microgreen1.jpg";
import image2 from "./Images/Microgreen2.jpg";
import image3 from "./Images/Microgreen3.jpg";

const Carousel = () => {
  const items = [
    <img src={image1} className="sliderimg" alt='' />,
    <img src={image2} className="sliderimg" alt='' />,
    <img src={image3} className="sliderimg" alt='' />,
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
