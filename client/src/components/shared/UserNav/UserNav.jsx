import React from "react";
import './UserNav.css'
import {NavLink} from 'react-router-dom'

const UserNav = (props) => {
  return (
    <nav>
      <div class='header'>
      <div className='usernav'>
        <div className='user'> 
        Welcome {props.username.username}!
        </div>
        <div className='navmenu'>
          <NavLink className="navlogin" to="/products">
            All Products
          </NavLink>
          <NavLink className="navsignup" to="/add">
            Add Product
          </NavLink>
          <NavLink className="navsignout" to="/signout">
            SignOut
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

export default UserNav;
