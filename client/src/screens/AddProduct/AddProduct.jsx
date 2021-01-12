import React from "react";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import Layout from "../../components/shared/Layout/Layout";
import Logo from "../../components/shared/Logo/Logo";
import "./AddProduct.css";

const AddProduct = (props) => {
  return props.user ? (
    <Layout username={props.user}>
      <Logo />
      <div className="addproduct">
        <div className="add-product-text">
          <h3 className="add-header">More Products to Add?</h3>
          <h6 className="add-sub-header">Add them here!</h6>
        </div>
        <div class="formdiv">
          <AddProductForm />
        </div>
      </div>
    </Layout>
  ) : (
    <>Not Authorized</>
  );
};

export default AddProduct;
