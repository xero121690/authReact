import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header >
    <nav>
      <ul className="list-reset flex">
        <li className="mr-6">
          <NavLink exact to='/'>Home</NavLink>
        </li>
        <li className="mr-6">
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className="mr-6">
          <NavLink to='/topics'>Topics</NavLink>
        </li>
        <li className="mr-6">
          <NavLink to='/subpage'>Subpage</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header