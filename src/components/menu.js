import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <div className="avenir mv2 flex items-center justify-center">
      <NavLink
        exact
        activeClassName="bg-light-purple white br2"
        className="mh2 pa2 link purple"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="bg-light-purple br2"
        className="mh2 pa2 link purple"
        to="/about"
      >
        About
      </NavLink>
    </div>
  )
}

export default Menu
