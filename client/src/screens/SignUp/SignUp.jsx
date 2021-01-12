import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Layout from "../../components/shared/Layout/Layout";
import Button from "@material-ui/core/Button";
import { signUp, login } from "../../services/users";
import { NavLink } from "react-router-dom";
import "./SignUp.css";
import Logo from "../../components/shared/Logo/Logo";

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
        <Button type="submit" className={toggleForm} variant="contained">
          {form.errorMsg}
        </Button>
      );
    } else {
      return (
        <Button
          type="submit"
          className="signup-button"
          variant="contained"
          color="secondary"
        >
          Create
        </Button>
      );
    }
  };

  const { email, username, password, passwordConfirmation } = form;
  return (
    <Layout>
      <Logo />
      <div className="signup-div">
        <div className="create-text">
          <h3 className="create-header">Create account.</h3>
          <h6 className="login-header-signup">
            Already have an account?{" "}
            <NavLink className="login-link" to="/login">
              Login
            </NavLink>
          </h6>
        </div>
        <div className="formdiv">
          <form onSubmit={onSignUp} className="form">
            <TextField
              required
              name="username"
              value={username}
              label="Username"
              variant="outlined"
              type="text"
              onChange={handleChange}
            />
            <TextField
              required
              name="email"
              value={email}
              label="Email"
              variant="outlined"
              type="text"
              onChange={handleChange}
            />
            <TextField
              required
              name="password"
              value={password}
              label="Password"
              variant="outlined"
              type="password"
              onChange={handleChange}
            />
            <TextField
              required
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
      </div>
    </Layout>
  );
};

export default SignUp;
