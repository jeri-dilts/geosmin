import React from "react";
import ProductCards from "../../components/ProductCards/ProductCards";
import './Products.css';
import Layout from "../../components/shared/Layout/Layout";


const Products = (props) => {
  
  return (
    <Layout username={props.user}>
      <div className='all-products'>
        <ProductCards />
      </div>
    </Layout>
  );
};

export default Products;
