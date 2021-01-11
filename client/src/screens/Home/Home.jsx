import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";
import Footer from "../../components/shared/Footer/Footer";
import { NavLink } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "../../components/Carousel/Carousel";
import Carousel2 from "../../components/Carousel2/Carousel2";
import Carousel3 from "../../components/Carousel3/Carousel3";
import Logo from "../../components/shared/Logo/Logo";

const Home = (props) => {
  return (
    <Layout username={props.user}>
      <div>
        <Logo />
        <div className="homeIMG">
          <img
            className="home-image"
            src="https://res.cloudinary.com/decd84s0g/image/upload/v1610394401/Geosmin/header-image.jpg"
            alt=""
          />
        </div>
        <div className="product-row-top">
          <div className="product-row">
            <div className="carousel1">
              <p className="collection-title">Gourmet Mushrooms</p>
              <Carousel />
            </div>
            <div className="carousel2">
              <p className="collection-title">Microgreens</p>
              <Carousel2 />
            </div>
            <div className="carousel3">
              <p className="collection-title">All Products</p>
              <Carousel3 />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
