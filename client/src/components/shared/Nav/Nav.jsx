import React from "react";
// import "./Nav.css";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Nav = (props) => {

  return (
      <div className='header'>
      <div className='usernav'>
        <div className='navmenu'>
          <NavLink className="navlogin" to="/login">
            Login
          </NavLink>
          <NavLink className="navsignup" to="/signup">
            Signup
          </NavLink>
          <ShoppingCartIcon />
          </div>
        </div>
      </div>
  );
};

export default Nav;
