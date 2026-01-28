import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Portfolio.css';

function Portfolio({ projects, loading }) {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2>My Portfolio</h2>
        {loading ? (
          <p className="loading">Loading projects...</p>
        ) : projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="no-projects">No projects found. Check back soon!</p>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
