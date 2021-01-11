import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ContactUsForm.css";
import * as emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";

const ContactUsForm = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: from_name,
      from_email: from_email,
      to_name: "",
      message: message,
    };
    emailjs
      .send(
      "default_service",
      "template_jwssmgi",
      templateParams,
      "user_KsJqdWsEA8BMBnKesLRvn"
    )
    .then(() => history.push("/"))
  };

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
        <Button type="submit" className="CU-button" variant="contained">
          Submit
        </Button>
      );
    }
  };

  const { from_name, from_email, message } = form;

  return (
    <div className='CU-div'>
      <h1>Contact us!</h1>
      <form className="CU-form" onSubmit={handleSubmit}>
        <TextField
          required
          onChange={handleChange}
          name="from_name"
          value={from_name}
          // className="textfield"
          label="Name"
          variant="outlined"
          type="text"
        />
        <TextField
          required
          onChange={handleChange}
          name="from_email"
          value={from_email}
          // className="textfield"
          label="E-mail"
          variant="outlined"
          type="text"
        />
        <TextField
          required
          multiline
          onChange={handleChange}
          name="message"
          value={message}
          // className="textfield"
          label="Message"
          rows={4}
          variant="outlined"
        />
        {renderError()}
      </form>
    </div>
  );
};

export default ContactUsForm;
