import React from "react";
import "./Layout.css";
import Nav from "../Nav/Nav";
import UserNav from "../UserNav/UserNav";
import Footer from '../../shared/Footer/Footer';

const Layout = (props) => {
  return (
    <div className="layout">
      {props.username ? <UserNav username={ props.username}/> : <Nav />}
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
