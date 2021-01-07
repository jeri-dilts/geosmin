import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";
import Footer from '../../components/shared/Footer/Footer';
import { NavLink } from "react-router-dom";

const Home = (props) => {

  return (
    <Layout username={props.user}>
      <div className="homeIMG">
        <img
          className="home-image"
          src="https://images.unsplash.com/photo-1582095128060-e9ca8130cc6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt=''
        />
      </div>
      <div className="product-row">
        <div className="top">
          <p className='collection-title'>Top Sellers</p>
          <img
            className="topIMG"
            src="https://images.unsplash.com/photo-1558616629-899031969d5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=''
          />
        </div>
        <div className="featured">
        <p className='collection-title'>New & Featured</p>
          <img
            className="featuredIMG"
            src="https://images.unsplash.com/photo-1593850685222-689a0efd7957?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=''
          />
        </div>
        <div className="all" to="/products">
        <p className='collection-title'>All Products</p>
          <NavLink to="/products">
            <img
              className="allIMG"
              src="https://images.unsplash.com/photo-1501169527804-c216a681aab8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=''
            />
          </NavLink>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
