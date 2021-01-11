import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-contact-area">
        <NavLink to="/aboutus">
          <h6 className="aboutUs">About Us</h6>
        </NavLink>
        <NavLink to='/contactus'>
        <h6 className="contactUs">Contact Us</h6>
        </NavLink>
      </div>
      <div className="icon-area">
        <a href='https://www.instagram.com/chestnutzack/?hl=en'>
        <InstagramIcon className='insta_icon'/>
        </a>
        <FacebookIcon className='fb_icon' />
      </div>
    </div>
  );
}
