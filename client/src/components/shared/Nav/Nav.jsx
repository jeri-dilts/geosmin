import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

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
          </div>
        </div>
      </div>
  );
};

export default Nav;
