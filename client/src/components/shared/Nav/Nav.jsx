import React from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
    <div className='nav'>
      <NavLink className='logo' to='/'>
        Geosmin
      </NavLink>
      <div>
        <NavLink className='link' to='/add'>
          Add Product
        </NavLink>
      </div>
    </div>
    </nav>
  );
};

export default Nav;