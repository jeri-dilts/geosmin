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
    <Layout user={props.user}>
      <div className="product-edit">
        <div className="image-container">
          <img
            className="edit-product-image"
            src={product.imgURL}
            alt={product.name}
          />
          <form onSubmit={handleSubmit}>
            <TextField
              className="edit-input-image-link"
              placeholder="Image Link"
              value={product.imgURL}
              name="imgURL"
              required
              variant="outlined"
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
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
          <TextField
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            variant="outlined"
            onChange={handleChange}
          />
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
          <Button type="submit" className="save-button">
            Save
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default EditProduct;
