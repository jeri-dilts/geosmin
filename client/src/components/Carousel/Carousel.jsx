import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './Images/Microgreen1.jpg'
import image2 from './Images/Microgreen2.jpg';
import image3 from './Images/Microgreen3.jpg';

const Carousel = () => {
  return (
    <div className='carousel-images'>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" />
        <img src={image2} className="sliderimg" />
        <img src={image3} className="sliderimg" />
      </AliceCarousel>
    </div>
  );
};

export default Carousel;
