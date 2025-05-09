import React from 'react';
import './About.css';
import { FaPython, FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaAws  } from 'react-icons/fa';
import { SiR } from 'react-icons/si';

function About() {
  return (
    <div className="about-section">
    <div className="about-me">
      <h2>ABOUT ME</h2>
      <p>
        I’m a software developer with a passion for building scalable, performant, and impactful programs. I specialize in Python and SQL, 
        and I’m constantly learning new technologies to solve problems. Currently, I’m sharpening my frontend and design skills by building 
        and refining this webpage, while also staying sharp with regular Leetcode practice.
      </p>
      <p>
        I graduated from UBC in April of 2024 and am currently open to work. To reach out, email me! My email is linked at the bottom of the page.
      </p>
      <p>
      When I’m not coding, I like to keep my brain busy with puzzles and brain games—I rarely miss a day of the New York Times Mini Crossword or Wordle.
       I’m also a big fan of video games like Minecraft, Fortnite, and Marvel Rivals. They’re not just fun, they’re one of the best ways I stay 
       connected with friends who live far away. When I need to unwind, I love diving into a good movie, book, or podcast—those are my favorite
        ways to relax and take in stories. I also make time to get outside and move everyday, whether it’s a casual walk or a refreshing run—it’s my go-to reset.
      </p>
    </div>

    <hr className="divider" />

    <div className="skills">
  <h2>SKILLS</h2>
  <ul className="skill-icons">
    <li className="skill-item"><FaPython /><span>Python</span></li>
    <li className="skill-item"><FaJava /><span>Java</span></li> 
    <li className="skill-item"><FaJsSquare /><span>JavaScript</span></li>
    <li className="skill-item"><FaReact /><span>React</span></li>
    <li className="skill-item"><FaHtml5 /><span>HTML5</span></li>
    <li className="skill-item"><FaCss3Alt /><span>CSS3</span></li>
    <li className="skill-item"><SiR /><span>R</span></li>
    <li className="skill-item"><FaGitAlt /><span>Git</span></li>
    <li className="skill-item"><FaAws /></li>
    
  </ul>
</div>
  </div>
);
}

export default About;