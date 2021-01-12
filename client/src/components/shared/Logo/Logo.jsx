import React from 'react'
import {NavLink} from 'react-router-dom'
import './Logo.css'
import GeosminTransparent from './Images/GeosminTransparent.png';


export default function Logo() {

    return (
        <div className="logo-div">
        <NavLink className="logo" to="/">
          <img src={GeosminTransparent} className='geosmin-logo' alt='Geosmin'/>
        </NavLink>
      </div>
    )
}
