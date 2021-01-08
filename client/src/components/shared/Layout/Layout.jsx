import React from "react";
import "./Layout.css";
import Nav from "../Nav/Nav";
import Footer from '../Footer/Footer';
import UserNav from "../UserNav/UserNav";

const Layout = (props) => {

console.log(props.username);
  return (
    <div className="layout">
      {props.username ? <UserNav username={ props.username}/> : <Nav />}
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
