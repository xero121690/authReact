import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header >
    <nav>
      {/* <ul className="list-reset flex">
        <li className="mr-6">
          <NavLink exact to='/'>Profile</NavLink>
        </li>
        <li className="mr-6">
          <NavLink to='/about'>Upload</NavLink>
        </li>
      </ul> */}

      <ul class="list-reset flex border-b">
  <li class="-mb-px mr-1">
    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold"><NavLink exact to='/'>Profile</NavLink></a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold"> <NavLink to='/about'>Upload</NavLink></a>
  </li>
</ul>







    </nav>
  </header>
)

export default Header