import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <Footer />
    </>
  );
}

export default App;