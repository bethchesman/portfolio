import React from 'react';
import './Home.css'; 
import mountainImg from '../assets/mountain.png';

function Home() {
  return (
    <div className="home">
      {/* Background Mountain */}
      <div 
        className="mountain" 
        style={{ backgroundImage: `url(${mountainImg})` }}
      ></div>

      <section className="intro-section">
        <h1>BETH CHESMAN</h1>
        <p className="tagline">Software Developer | Problem Solver</p>
      </section>

      <div className="water"></div>

      <div className="water-two"></div>
      
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I’m a software developer with a passion for building scalable, performant, and impactful web applications. I specialize in JavaScript frameworks like React and Node.js, and I’m constantly learning new technologies to solve complex problems.
        </p>
        <p>
          When I'm not coding, I enjoy solving puzzles, running, and reading.
        </p>
      </section>
    </div>
  );
}

export default Home; // Ensure this is correct
