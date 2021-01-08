import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {

  return (
    <nav>
      <div class='header'>
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
      <div className="logo-div">
        <NavLink className="logo" to="/">
          G e o s m i n
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
