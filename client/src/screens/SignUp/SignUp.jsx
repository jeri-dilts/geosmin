import React from "react";
import TextField from "@material-ui/core/TextField";
import Layout from "../../components/shared/Layout/Layout";
import Button from "@material-ui/core/Button";
import "./SignUp.css";

const SignUp = () => {
  return (
    <Layout>
      <div className="signup-div">
        <form className="signup-form">
          <TextField
            
            className="signup-field"
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
            className="signup-field"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type='password'
          />
          <TextField
            className="signup-field"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button className="signup-button" variant="contained">
            Signup
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
