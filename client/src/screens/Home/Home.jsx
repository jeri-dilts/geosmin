import React from 'react';
import './Home.css';
import Layout from '../../components/shared/Layout/Layout';
import ProductCards from '../../components/ProductCards/ProductCards'

const Home = () => {
  return (
    <Layout>
      <div className='homeIMG'>
        <img className='home-image' src='https://images.unsplash.com/photo-1582095128060-e9ca8130cc6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' />
      </div>
      <div className='product-row'>
        <div className='top'>
          <h2>Top Sellers</h2>
          <img className='topIMG' src='https://images.unsplash.com/photo-1558616629-899031969d5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' />
          </div>
        <div className='featured'>New & Featured</div>
        <div className='all'>All Products</div>
      </div>
    <div className="products">
      <ProductCards />
    </div>
    </Layout>
  );
};

export default Home;