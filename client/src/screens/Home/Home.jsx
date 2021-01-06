import React from 'react';
import './Home.css';
import '../../components/ProductCards/ProductCards.css';
import Layout from '../../components/shared/Layout/Layout';

const Home = () => {
  return (
    <Layout>
    <div className="posts">
      <ProductCards />
    </div>
    </Layout>
  );
};

export default Home;