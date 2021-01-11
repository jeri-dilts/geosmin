import React from 'react'
import {NavLink} from 'react-router-dom'
import './Logo.css'
import Geosmin from './Images/Geosmin.png';
// import Geosmin1 from './Images/Geosmin1.png';
// import Geosmin2 from './Images/Geosmin2.png';
// import Geosmin3 from './Images/Geosmin3.png';
// import GeosminTransparent from './Images/GeosminTransparent.png';


export default function Logo() {

    return (
        <div className="logo-div">
        <NavLink className="logo" to="/">
          <img src={Geosmin} className='geosmin-logo' alt='Geosmin'/>
        </NavLink>
      </div>
    )
}
