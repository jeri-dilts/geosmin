import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Layout from "../../components/shared/Layout/Layout";
import Button from "@material-ui/core/Button";
import { login } from "../../services/users";
import "./Login.css";



const Login = (props) => {
  
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({
      ...form,
      [name]:value,
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
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <Button className="login-button" variant="contained">
          Login
        </Button>
      );
    }
  };

  const { username, password } = form;

  return (
    <Layout>
      <div className="login-div">
        <form className="login-form" onSubmit={onLogin}>
          <TextField
            required
            onChange={handleChange}
            name='username'
            value={username}
            className="login-field"
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
            required
            onChange={handleChange}
            name='password'
            value={password}
            className="login-field"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
};

export default Login;
