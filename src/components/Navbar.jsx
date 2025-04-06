import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;