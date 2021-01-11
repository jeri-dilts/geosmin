import React from 'react';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import Layout from '../../components/shared/Layout/Layout';
import Logo from '../../components/shared/Logo/Logo';

const AddProduct = (props) => {
  return (
    props.user ? 
      <Layout username={props.user}>
        <Logo />
      <div class='addproduct'>
        <AddProductForm />
      </div>
      </Layout>
      :<>Not Authorized</>
  );
};

export default AddProduct;