import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./Images/Mushroom1.jpg";
import image2 from "./Images/Mushroom2.jpg";
import image3 from "./Images/Mushroom3.jpg";
import image4 from "./Images/Mushroom4.jpg";

const Carousel2 = () => {
  const items = [
    <img src={image1} className="sliderimg" />,
    <img src={image2} className="sliderimg" />,
    <img src={image3} className="sliderimg" />,
    <img src={image4} className="sliderimg" />,
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
