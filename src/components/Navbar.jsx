import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
    </nav>
  );
}

export default Navbar;