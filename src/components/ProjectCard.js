import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image_url || 'https://via.placeholder.com/300x200'} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.technologies && project.technologies.split(',').map((tech, index) => (
            <span key={index} className="tag">{tech.trim()}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
