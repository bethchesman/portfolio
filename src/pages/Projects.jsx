import React, { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    title: "THIS WEBSITE!",
    year: "2025",
    shortDescription: "React Frontend",
    fullDescription: "This website is both my portfolio and a chance for me to further develop my frontend skills. I didn't have professional frontend training, so projects like this really help me learn. What you're looking at currently is my first version, which I plan on further improving. My next goal is to add some interactive features and make the site compatible with phones.",
  },{
    title: "Video Sharing Site",
    year: "2024",
    shortDescription: "AWS Capstone Project",
    fullDescription: "Created a secure video sharing platform using AWS, Flask, and React. Features include face blurring, chats connected to each video, video and chat encryption, email verification, video tags for searching, video retention, and notifications.",
  },
  {
    title: "Amazons Game AI",
    year: "2024",
    shortDescription: "Game-playing AI using Minimax.",
    fullDescription: "An AI that plays the game of Amazons using a minimax algorithm optimized with alpha-beta pruning and iterative deepening. The AI competed in a class tournament and placed decently.",
  },
  {
    title: "Candy Store Database",
    year: "2022",
    shortDescription: "Microsoft SQL Server Database",
    fullDescription: "Candy Store database that can be manually updated from the website. Written in HTML, Java, and SQL.",
  },
  {
    title: "Teeny-Tiny Farm",
    year: "2020",
    shortDescription: "Java Farm Game",
    fullDescription: "A farm game made to help learn object oriented programming and Java. Feed your farm animals, track their movements, and make sure you have enough food for them!"
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      {projectData.map((project, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className={`project-entry ${isActive ? 'expanded' : ''}`}
            onClick={() => setActiveIndex(isActive ? null : index)}
          >
            <div className="short-description">{project.shortDescription}</div>

            <div className="project-header">
              <span className="project-title">{project.title}</span>
              <span className="divider-line"></span>
              <span className="project-year">{project.year}</span>
            </div>

            {isActive && (
              <div className="full-description">
                {project.fullDescription}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
