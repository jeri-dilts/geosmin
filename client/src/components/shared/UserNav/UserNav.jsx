import React from "react";
import './UserNav.css'
import {NavLink} from 'react-router-dom'

const UserNav = (props) => {
  return (
    <div>
      <div className="logo-div">
        <NavLink className="logo" to="/">
          Geosmin
        </NavLink>
      </div>
      <div>
        <p>Welcome {props.username.username}</p>
        <div>
          <NavLink className="link" to="/products">
            All Products
          </NavLink>
        </div>
        <div>
          <NavLink className="link" to="/add">
            Add Product
          </NavLink>
        </div>
        <div>
          <NavLink className="link" to="/signout">
            SignOut
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
