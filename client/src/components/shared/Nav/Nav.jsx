import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {

  return (
    <nav>
      <div className="header"></div>
      <div className="logo-div">
        <NavLink className="logo" to="/">
          Geosmin
        </NavLink>
        </div>
      <div className='nav-div'>
        {/* This is for future development */}
        {/* <div className="search">Search</div> */}
        <div>
          <NavLink className="link" to="/login">
            Login
          </NavLink>
        </div>
        <div>
          <NavLink className="link" to="/signup">
            SignUp
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
