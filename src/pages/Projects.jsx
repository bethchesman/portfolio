import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  const projectData = [
    {
      title: "Video Sharing Site",
      shortDescription: "Flask backend + React frontend",
      fullDescription: "Created a secure video sharing platform using AWS S3, Flask, and React. Supports encrypted uploads, user login, and comment threads.",
    },
    {
      title: "Amazons Game AI",
      shortDescription: "Game-playing AI using Minimax.",
      fullDescription: "Built an AI for the Amazons board game with Minimax and alpha-beta pruning. Includes a React UI and custom game logic.",
    },
    {
      title: "Candy Store Team Project",
      shortDescription: "SQL database",
      fullDescription: "Candy Store database that can be manually updated from the website. Written in HTML, JavaScript, and SQL.",
    },
    {
      title: "Teeny-Tiny Farm",
      shortDescription: "How I learned OOP",
      fullDescription: "A farm game where you can take care of your own animals and track their location on the farm. Written in Java",
    },
  ];

  return (
    <div className="projects">
  <h2>PROJECTS</h2>
  <div className="project-list">
    {projectData.map((project, index) => (
      <div
        key={index}
        className={`project-entry ${expandedIndex === index ? 'expanded' : ''}`}
        onClick={() => handleCardClick(index)}
      >
        <div className="project-title">{project.title}</div>
        <div className="project-short">{project.shortDescription}</div>
        <div className="project-full">{project.fullDescription}</div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Projects;
