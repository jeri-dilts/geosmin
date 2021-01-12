import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from '@material-ui/core/MenuItem';
import './AddProductForm.css'
import { createProduct } from "../../services/Products";
import { Redirect } from "react-router-dom";


const AddProductForm = () => {

  const [isCreated, setCreated] = useState(false)

  const [form, setForm] = useState({
    itemName: "",
    imgURL: "",
    description: "",
    price: "",
    itemType: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({
      ...form,
      [name]:value,
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
  
  const onProductSubmit = async (e) => {
    e.preventDefault();
    const created = await createProduct(form)
    setCreated(created)
  }

  if (isCreated) {
    return <Redirect to={`/products`} />
  }

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <Button type="submit" className={toggleForm} variant="contained">
          {form.errorMsg}
        </Button>
      );
    } else {
      return (
        <Button type="submit" className="add-product-button" variant="contained">
          Add Product
        </Button>
      );
    }
  };
  const { itemName, imgURL, description, price, itemType } = form;
  return (
    // <div className="add-product-form">
      <form  className='form' onSubmit={onProductSubmit}>
        <TextField
          required
          onChange={handleChange}
          name="itemName"
          value={itemName}
          className="textfield"
          label="Item Title"
          variant="outlined"
          type="text"
        />
        <TextField
          required
          onChange={handleChange}
          name="imgURL"
          value={imgURL}
          className="textfield"
          label="image URL"
          variant="outlined"
          type="text"
        />
        <TextField
          required
          multiline
          onChange={handleChange}
          name="description"
          value={description}
          className="textfield"
          label="Description"
          rows={4}
          variant="outlined"
        />
        
        <TextField
          required
          onChange={handleChange}
          name="price"
          value={price}
          className="textfield"
          label="Price"
          variant="outlined"
          type="text"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        <TextField
          required
          select
          onChange={handleChange}
          name="itemType"
          value={itemType}
          className="textfield"
          label="Item Type "
          variant="outlined"
          type="text"
        >
          {type.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {renderError()}
      </form>
    // </div>
  );
};

export default AddProductForm;


