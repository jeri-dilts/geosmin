import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" />
        <img src={image2} className="sliderimg" />
        <img src={image3} className="sliderimg" />
        <img src={image4} className="sliderimg" />
      </AliceCarousel>
    </div>
  );
};

export default Carousel;
