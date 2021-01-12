import React from "react";
import ProductCards from "../../components/ProductCards/ProductCards";
import Layout from "../../components/shared/Layout/Layout";
import Logo from '../../components/shared/Logo/Logo';
import './Mushrooms.css';


const Mushrooms = (props) => {
  
  return (
    <Layout username={props.user}>
      <Logo />
      <div className='mushrooms'>
        <ProductCards itemType='mushroom'/>
      </div>
    </Layout>
  );
};

export default Mushrooms;
