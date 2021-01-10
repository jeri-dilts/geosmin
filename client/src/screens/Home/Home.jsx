import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";
import Footer from "../../components/shared/Footer/Footer";
import { NavLink } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "../../components/Carousel/Carousel";
import Carousel2 from '../../components/Carousel2/Carousel2';
import Carousel3 from '../../components/Carousel3/Carousel3';
import Logo from '../../components/shared/Logo/Logo';

const Home = (props) => {
  return (
    <Layout username={props.user}>
      <div>
        <Logo />
      <div className="homeIMG">
        <img
          className="home-image"
          src="https://images.unsplash.com/photo-1582095128060-e9ca8130cc6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt=""
        />
      </div>
      <div class='product-row-top'>
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
      <div class="parallax">
        <div className="content">
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      </div>
    </Layout>
    
  );
};

export default Home;
