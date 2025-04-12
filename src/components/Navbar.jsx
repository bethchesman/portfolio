import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav>
      <a href="#about">ABOUT</a>
      <a href="#projects">PROJECTS</a>
      <a href="#contact">CONTACT</a>
    </nav>
  );
}

export default Navbar;