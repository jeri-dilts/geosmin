import React from "react";
import ProductCards from "../../components/ProductCards/ProductCards";
import './Products.css';
import Layout from "../../components/shared/Layout/Layout";
import Logo from '../../components/shared/Logo/Logo';


const Products = (props) => {
  
  return (
    <Layout username={props.user}>
      <Logo />
      {/* <div className="homeIMG">
          <img
            className="home-image"
            src="https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/7b897d4321724b46b4369ca45666c344.jpg"
            alt=""
          />
        </div> */}
      <div className='all-products'>
        <ProductCards />
      </div>
    </Layout>
  );
};

export default Products;
