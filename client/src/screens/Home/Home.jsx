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
        <div className="mushrooms">
          <p className='collection-title'>Gourmet Mushrooms</p>
          <img
            className="mushroomIMG"
            src="https://images.unsplash.com/photo-1607529005069-8e1f336233fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=''
          />
        </div>
        <div className="microgreens">
        <p className='collection-title'>Microgreens</p>
          <img
            className="microgreenIMG"
            src="https://images.unsplash.com/photo-1593850684972-6ea75dfb77bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=''
          />
        </div>
        <div className="all" to="/products">
        <p className='collection-title'>All Products</p>
          <NavLink to="/products">
            <img
              className="allIMG"
              src="https://images.unsplash.com/photo-1523218507958-81785af4f6e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
