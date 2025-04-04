import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'active' : ''} // Apply 'active' class if the link is active
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        About
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Projects
      </NavLink>
    </nav>
  );
}

export default Navbar;