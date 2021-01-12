import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "../../components/Carousel/Carousel";
import Carousel2 from "../../components/Carousel2/Carousel2";
import Carousel3 from "../../components/Carousel3/Carousel3";
import Logo from "../../components/shared/Logo/Logo";

const Home = (props) => {
  return (
    <Layout username={props.user}>
      <div className="landing_page">
        <Logo />
          <div className="subheader">Regenerative Biodynamic Farming</div>
          <div className="subheader2">Locally in Richmond, Southside</div>
          <div className="box"></div>
        <div className="homeIMG">
          <img
            className="home-image"
            src="https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/7b897d4321724b46b4369ca45666c344.jpg"
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
