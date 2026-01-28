import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/pages/About.css';

function About() {
  const whoRef = useScrollAnimation();
  const journeyRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const offeringRef = useScrollAnimation();
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About Me</h1>
          <div className="header-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-section" ref={whoRef}>
            <h2 className="section-title">Who I Am</h2>
            <p className="section-text">
              I'm Normie Cantiveros, a passionate full-stack developer dedicated to creating 
              beautiful, functional, and user-friendly web applications. With expertise in 
              modern web technologies, I transform ideas into reality.
            </p>
          </div>

          <div className="about-section" ref={journeyRef}>
            <h2 className="section-title">My Journey</h2>
            <p className="section-text">
              My passion for coding started early, and I've continuously evolved my skills 
              to stay current with industry trends. I believe in writing clean, maintainable code 
              and delivering exceptional user experiences.
            </p>
          </div>

          <div className="about-section" ref={skillsRef}>
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript ES6+</li>
                  <li>HTML5 / CSS3</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>PHP 7.4+</li>
                  <li>RESTful APIs</li>
                  <li>Server Management</li>
                  <li>Database Design</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Other Languages</h3>
                <ul>
                  <li>Java</li>
                  <li>C#</li>
                  <li>C</li>
                  <li>SQL</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Databases</h3>
                <ul>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                  <li>SQL Optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-section" ref={offeringRef}>
            <h2 className="section-title">What I Offer</h2>
            <div className="offerings">
              <div className="offering-card">
                <div className="offering-icon">💻</div>
                <h3>Web Development</h3>
                <p>Full-stack web applications with modern frameworks and best practices</p>
              </div>

              <div className="offering-card">
                <div className="offering-icon">🎨</div>
                <h3>UI/UX Design</h3>
                <p>Beautiful, intuitive interfaces that users love</p>
              </div>

              <div className="offering-card">
                <div className="offering-icon">⚡</div>
                <h3>Performance</h3>
                <p>Fast, optimized applications that deliver results</p>
              </div>

              <div className="offering-card">
                <div className="offering-icon">🔒</div>
                <h3>Security</h3>
                <p>Secure applications with best security practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
