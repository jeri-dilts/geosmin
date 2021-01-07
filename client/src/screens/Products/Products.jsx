import React from "react";
import ProductCards from "../../components/ProductCards/ProductCards";
import Layout from "../../components/shared/Layout/Layout";

const Products = (props) => {
  return (
    <Layout username={props.user}>
      <div>
        <ProductCards />
      </div>
    </Layout>
  );
};

export default Products;
