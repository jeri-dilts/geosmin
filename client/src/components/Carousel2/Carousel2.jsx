import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './Images/Mushroom1.jpg'
import image2 from './Images/Mushroom2.jpg';
import image3 from './Images/Mushroom3.jpg';
import image4 from './Images/Mushroom4.jpg';

const Carousel2 = () => {
  return (
    <div className='carousel-images'>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" />
        <img src={image2} className="sliderimg" />
        <img src={image3} className="sliderimg" />
        <img src={image4} className="sliderimg" />
      </AliceCarousel>
    </div>
  );
};

export default Carousel2;