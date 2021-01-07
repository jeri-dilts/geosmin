import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {

  return (
    <nav>
      <div class='header'>
      <div className='usernav'>
        <div className='navmenu'>
          <NavLink className="navprod" to="/login">
            Login
          </NavLink>
          <NavLink className="navadd" to="/signup">
            Signup
          </NavLink>
          </div>
        </div>
      </div>
      <div className="logo-div">
        <NavLink className="logo" to="/">
          Geosmin
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
