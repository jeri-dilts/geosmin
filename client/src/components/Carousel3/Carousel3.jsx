import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './Images/Mushroom1.jpg'
import image2 from './Images/Mushroom2.jpg';
import image3 from './Images/Microgreen1.jpg';
import image4 from './Images/Microgreen2.jpg';
import {NavLink} from 'react-router-dom';

const Carousel3 = () => {
  return (
    <div className='carousel-images'>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <NavLink to='/products'>
        <img src={image1} className="sliderimg" />
      </NavLink>
      <NavLink to='/products'>
        <img src={image2} className="sliderimg" />
      </NavLink>
      <NavLink to='/products'>
        <img src={image3} className="sliderimg" />
      </NavLink>
      <NavLink to='/products'>
        <img src={image4} className="sliderimg" />
      </NavLink>
      </AliceCarousel>
    </div>
  );
};

export default Carousel3;