import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Layout from "../../components/shared/Layout/Layout";
import Button from "@material-ui/core/Button";
import { login } from "../../services/users";
import { NavLink } from "react-router-dom";
import "./Login.css";
import Logo from "../../components/shared/Logo/Logo";
import Footer from "../../components/shared/Footer/Footer";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../components/shared/Theme/Theme";

const Login = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onLogin = (event) => {
    event.preventDefault();

    const { setUser } = props;

    login(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: "",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            className={toggleForm}
            variant="contained"
            color="secondary"
          >
            {form.errorMsg}
          </Button>
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </ThemeProvider>
      );
    }
  };

  const { username, password } = form;

  return (
    <Layout>
      <Logo />
      <div className="login-div">
        <div className="login-text">
          <h3 className="login-header">Login to your account.</h3>
          <h6 className="signup-header">
            Don't have one?{" "}
            <NavLink className="login-link" to="/signup">
              Signup
            </NavLink>
          </h6>
        </div>
        <form className="login-form" onSubmit={onLogin}>
          <ThemeProvider theme={theme}>
            <TextField
              color="primary"
              required
              onChange={handleChange}
              name="username"
              value={username}
              className="login-field"
              label="Username"
              variant="outlined"
            />
          </ThemeProvider>
          <TextField
            required
            onChange={handleChange}
            name="password"
            value={password}
            className="login-field"
            label="Password"
            variant="outlined"
            type="password"
          />
          {renderError()}
        </form>
      </div>
      <Footer />
    </Layout>
  );
};

export default Login;
