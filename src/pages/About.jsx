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
        Some of my relevant coursework includes: Calculus III, Human-Computer Interaction, Introduction to Artificial Intelligence, Making Predictions
         with Data, Parallel Computing, Project Management, and Software Engineering.
      </p>
      <p>
      When I’m not coding, I like to keep my brain busy with books, puzzles, and brain games like Wordle and Sudoku. I’m also a big fan of video 
      games like Minecraft, Fortnite, and Marvel Rivals. They’re one of the best ways I stay connected with friends who live far away.  
      Staying active and getting outside is also important to me, so I run and hike a few times a week.
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