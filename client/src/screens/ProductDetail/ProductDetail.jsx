import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/Products";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./ProductDetail.css";
import { ThemeProvider } from '@material-ui/core'
import theme from "../../components/shared/Theme/Theme";

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
        <div className="image-div">
          <img
            className="product-detail-image"
            src={product.imgURL}
            alt={product.itemName}
          />
        </div>
        <div className="detail">
          <div className="title">{product.itemName}</div>
          <div className="detail-price">{product.price}</div>
          <div className="description">{product.description}</div>
        </div>
        <div className="button-div">
          <Button
            className="edit-button-detail"
            variant="contained"
            color="primary"
          >
            <Link to={`/product/edit/${product._id}`}>Edit</Link>
          </Button>
          <ThemeProvider theme={theme}>
            <Button
              className="delete-button"
              variant="contained"
              onClick={onProductDelete}
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
