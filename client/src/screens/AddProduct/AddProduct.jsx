import React from 'react';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import Layout from '../../components/shared/Layout/Layout';

const AddProduct = (props) => {
  return (
    <Layout username={props.user}>
    <div>
      <AddProductForm />
    </div>
    </Layout>
  );
};

export default AddProduct;