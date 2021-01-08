import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import {NavLink} from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-text">
        <NavLink to="/aboutus">
          <h6 className="aboutUs">About Us</h6>
        </NavLink>
        <h6 className="contactUs">Contact Us</h6>
      </div>
      <div className="icons">
        <InstagramIcon />
        <GithubIcon />
        <FacebookIcon />
      </div>
    </div>
  );
}
