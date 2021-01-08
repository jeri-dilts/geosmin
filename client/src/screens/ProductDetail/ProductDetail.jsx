import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/Products";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import './ProductDetail.css';

//Need to add more Schema items to the return section

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

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
  const onProductDelete = (e) => {
    e.preventDefault();
    deleteProduct(id).then(() => history.push("/products"));
  };
  
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
        <div>
          <Button><Link className="edit-link" to={`/product/edit/${product._id}`}>Edit</Link></Button>
        </div>
        <div>
          <Button onClick={onProductDelete}>Delete</Button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
