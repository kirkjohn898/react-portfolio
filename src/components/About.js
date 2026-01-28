import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack web developer with experience in React, PHP, 
              and MySQL. I love creating beautiful and functional web applications that 
              solve real-world problems.
            </p>
            <p>
              My expertise includes frontend development, backend API design, and database 
              management. I'm committed to writing clean, maintainable code and delivering 
              high-quality projects.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript / ES6+</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>HTML / CSS</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
