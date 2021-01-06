import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Layout from "../../components/shared/Layout/Layout";
import Button from "@material-ui/core/Button";
import { signUp, login } from "../../services/users";
import "./SignUp.css";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => login(form))
      .then((user) => setUser(user))
      .then(() => history.push("/login"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else { 
      return (
        <Button type='submit' className="signup-button" variant="contained">
          Signup
        </Button>
      );
    }
  };

  const { email, username, password, passwordConfirmation } = form;
  return (
    <Layout>
      <div className="signup-div">
        <form onSubmit={onSignUp} className="signup-form">
          <TextField
            required
            className="signup-field"
            name="username"
            value={username}
            label="Username"
            variant="outlined"
            type="text"
            onChange={handleChange}
          />
          <TextField
            required
            className="signup-field"
            name="email"
            value={email}
            label="Email"
            variant="outlined"
            type="text"
            onChange={handleChange}
          />
          <TextField
            required
            className="signup-field"
            name="password"
            value={password}
            label="Password"
            variant="outlined"
            type="password"
            onChange={handleChange}
          />
          <TextField
            required
            className="signup-field"
            name="passwordConfirmation"
            value={passwordConfirmation}
            label="Password Confirmation"
            variant="outlined"
            type="password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
