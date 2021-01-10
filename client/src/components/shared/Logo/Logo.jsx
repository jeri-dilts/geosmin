import React from 'react'
import {NavLink} from 'react-router-dom'
import './Logo.css'

export default function Logo() {

    return (
        <div className="logo-div">
        <NavLink className="logo" to="/">
          G e o s m i n
        </NavLink>
      </div>
    )
}
