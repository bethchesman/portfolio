import React from 'react';
import './Home.css'; 
import mountainImg from '../assets/mountain.png';

function Home() {
  return (
    <div className="home">
    
      <div 
        className="mountain" 
        style={{ backgroundImage: `url(${mountainImg})` }}
      ></div>

      <section className="intro-section">
        <h1>BETH CHESMAN</h1>
        <p className="tagline">Software Developer</p>
      </section>

      <div className="water"></div>

      <div className="water-two"></div>
      
      <div className="right-tree" ></div>

      <div className="left-tree" ></div>

    </div>
  );
}

export default Home; 
