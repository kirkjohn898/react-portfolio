import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/pages/Portfolio.css';

function PortfolioPage() {
  const headerRef = useScrollAnimation();
  const filterRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/projects.php');
      const data = await response.json();
      setProjects([...exampleProjects, ...data]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Use example projects if API fails
      setProjects(exampleProjects);
      setLoading(false);
    }
  };

  const exampleProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, product management, and user authentication.',
      technologies: 'React, PHP, MySQL, Stripe',
      image_url: '/images/ecommerce.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Thesis Management System',
      description: 'A comprehensive system for managing thesis submissions, reviews, and approvals for academic institutions.',
      technologies: 'React, PHP, MySQL, JavaScript',
      image_url: '/images/thesis-system.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      technologies: 'React, JavaScript, Firebase',
      image_url: 'https://via.placeholder.com/300x200?text=Task+Manager',
      link: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application with location-based forecasts and weather alerts.',
      technologies: 'React, API Integration, CSS3',
      image_url: 'https://via.placeholder.com/300x200?text=Weather+App',
      link: '#'
    }
  ];

  const categories = ['all', 'react', 'php', 'full-stack', 'other'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies?.toLowerCase().includes(filter));

  return (
    <section className="portfolio-page">
      <div className="portfolio-container">
        <div className="portfolio-header" ref={headerRef}>
          <h1>My Portfolio</h1>
          <div className="header-underline"></div>
          <p className="portfolio-subtitle">Showcasing my best work and projects</p>
        </div>

        <div className="filter-section" ref={filterRef}>
          <h3>Filter by Technology:</h3>
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : filteredProjects.length > 0 ? (
          <div className="projects-grid" ref={projectsRef}>
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <p className="no-projects">No projects found in this category.</p>
        )}
      </div>
    </section>
  );
}

export default PortfolioPage;
