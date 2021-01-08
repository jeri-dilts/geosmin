import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/Products";
import { useParams } from "react-router-dom";
import { Card } from "@material-ui/core";
import './ProductDetail.css';

//Need to add more Schema items to the return section

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      console.log(product);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout username={props.user}>
        <div className="product-detail">
          <img
            className="product-detail-image"
            src={product.imgURL}
            alt={product.itemName}
          />
          <div className="detail">
            <div className="title">{product.itemName}</div>
            <div className="description">{product.description}</div>
          </div>
        </div>
    </Layout>
  );
};

export default ProductDetail;
