// ProjectCard.jsx
import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ title, shortDescription, fullDescription }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
      <h3>{title}</h3>
      <p>{isExpanded ? fullDescription : shortDescription}</p>
    </div>
  );
}

export default ProjectCard;