import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
  getProduct,
  deleteProduct,
  updateProduct,
} from "../../services/Products";
import { Redirect, useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import MenuItem from '@material-ui/core/MenuItem';
import SaveIcon from '@material-ui/icons/Save';
import './EditProduct.css';
import Footer from '../../components/shared/Footer/Footer';
import Logo from '../../components/shared/Logo/Logo';

const EditProduct = (props) => {
  const [product, setProduct] = useState({
    itemName: "",
    description: "",
    imgURL: "",
    price: "",
    itemType: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const type = [
    {
      value: "mushroom",
      label: "Mushroom",
    },
    {
      value: "microgreen",
      label: "Microgreen",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/product/${id}`} />;
  }

 return (

    <Layout username={props.user}>
      <Logo />
      <div className='product-edit-div'>

      <div className="product-edit">
        <div className="image-container">
          <img
            className="edit-product-image"
            src={product.imgURL}
            alt={product.name}
            />
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <h4>Name</h4>
          <TextField
            className="input-itemName"
            placeholder="Name"
            value={product.itemName}
            name="itemName"
            required
            variant="outlined"
            autoFocus
            onChange={handleChange}
            />
          <h4>Price</h4>
          <TextField
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            variant="outlined"
            onChange={handleChange}
            />
          <h4>Image URL</h4>
          <TextField
              placeholder="Image Link"
              value={product.imgURL}
              name="imgURL"
              required
              variant="outlined"
              onChange={handleChange}
              />
            <h4>Description</h4>
          <TextField
            className="textarea-description"
            rows={10}
            cols={78}
            placeholder="Description"
            value={product.description}
            name="description"
            required
            variant="outlined"
            onChange={handleChange}
            />
          <TextField
            required
            select
            onChange={handleChange}
            name="itemType"
            value={product.itemType}
            className="textfield"
            label="Item Type"
            variant="outlined"
            type="text"
            >
            {" "}
            {type.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" className='save-button' variant='contained' color='secondary' startIcon={<SaveIcon />}>
            Save
          </Button>
        </form>
      </div>
            </div>
      {/* <Footer /> */}
    </Layout>
  );
};

export default EditProduct;
