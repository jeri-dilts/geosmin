import React from "react";
import "./UserNav.css";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const UserNav = (props) => {
  return (
      <div class="header">
        <div className="usernav">
          <div className="user">Welcome {props.username.username}!</div>
          <div className="navmenuadmin">
            <NavLink className="navlogin" to="/products">
              All Products
            </NavLink>
            <NavLink className="navadd" to="/add">
              Add Product
            </NavLink>
            <NavLink className="navsignout" to="/signout">
              SignOut
            </NavLink>
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
  );
};

export default UserNav;
