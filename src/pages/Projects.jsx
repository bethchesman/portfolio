import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div className="project-grid">
        <ProjectCard 
          title="Amazons Game AI" 
          shortDescription="Game-playing AI using Minimax."
          fullDescription="Built an AI for the Amazons board game with Minimax and alpha-beta pruning. Includes a React UI and custom game logic."
        />
        <ProjectCard 
          title="Video Sharing Site"
          shortDescription="Flask backend + React frontend"
          fullDescription="Created a secure video sharing platform using AWS S3, Flask, and React. Supports encrypted uploads, user login, and comment threads."
        />

        <ProjectCard 
          title="Candy Store Team Project"
          shortDescription="SQL database"
          fullDescription="Candy Store databasse that can be manually updated from the website. Written in HTML, JavaScript, and SQL."
        />

        <ProjectCard 
          title="Teeny-Tiny Farm"
          shortDescription="How I learned OOP"
          fullDescription="A farm game where you can take care of your own animals and track their location on the farm. Written in Java"
        />
        
      </div>
    </div>
  );
}

export default Projects;