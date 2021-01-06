import React from 'react';
import './Home.css';
import Layout from '../../components/shared/Layout/Layout';
import ProductCards from '../../components/ProductCards/ProductCards'

const Home = () => {
  return (
    <Layout>
    <div className="products">
      <ProductCards />
    </div>
    </Layout>
  );
};

export default Home;