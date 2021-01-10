import React from "react";
import "./Layout.css";
import Nav from "../Nav/Nav";
import Footer from '../Footer/Footer';
import UserNav from "../UserNav/UserNav";
import {NavLink} from 'react-router-dom';

const Layout = (props) => {

console.log(props.username);
  return (
    <div className="layout">
      {props.username ? <UserNav username={ props.username}/> : <Nav />}
      <div className="layout-children">{props.children}</div>
    </div>
  );
};

export default Layout;
