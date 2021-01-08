import React from "react";
import ProductCards from "../../components/ProductCards/ProductCards";
import './Products.css';
import Layout from "../../components/shared/Layout/Layout";
import Footer from '../../components/shared/Footer/Footer';

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
