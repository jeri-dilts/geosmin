import React from "react";
import "./Layout.css";
import Nav from "../Nav/Nav";

const Layout = (props) => {

  return (
    <div className="layout">
      <Nav username={props.username} />
      <div className="layout-children">{props.children}</div>
    </div>
  );
};

export default Layout;
