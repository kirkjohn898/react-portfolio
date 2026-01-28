import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Terminal from '../components/Terminal';
import AnimatedCounter from '../components/AnimatedCounter';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/pages/Home.css';

function TypingText() {
  const [displayText, setDisplayText] = useState('');
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Developer', 'Programmer'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    let timer;
    const currentFullText = words[currentWord];

    if (!isDeleting && displayText === currentFullText) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      // Move to next word
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    } else if (isDeleting) {
      // Delete character
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Type character
      timer = setTimeout(() => {
        setDisplayText((prev) => currentFullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord]);

  return (
    <span className="typing-text">
      {displayText}
      <span className="typing-cursor"></span>
    </span>
  );
}

function Home() {
  const statsRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'PHP', icon: '🐘' },
    { name: 'JavaScript', icon: '✨' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Java', icon: '☕' },
    { name: 'C#', icon: '🔷' }
  ];
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <section className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Normie Cantiveros</span>
            </h1>
            <p className="hero-subtitle">
              Junior Stack Developer | Creating Amazing Web Experiences
            </p>
            <p className="hero-description">
              I specialize in building responsive, scalable web applications using modern technologies.
              Let's turn your ideas into reality!
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="code-block">
              &lt;<TypingText />&gt;
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section" ref={statsRef}>
        <div className="stats-container">
          <AnimatedCounter end={5} label="Projects Completed" suffix="+" />
          <AnimatedCounter end={100} label="Client Satisfaction" suffix="%" />
          <AnimatedCounter end={1} label="Years Experience" />
        </div>
      </div>

      {/* Terminal Section */}
      <div className="terminal-section">
        <div className="terminal-section-header">
          <h2>About My Skills</h2>
          <p>Languages and technologies I work with:</p>
        </div>
        <Terminal />
      </div>

      {/* Skills Preview Section */}
      <div className="skills-preview-section" ref={skillsRef}>
        <div className="skills-container">
          <h2>My Skills</h2>
          <p className="skills-intro">
            I am junior stack developer with a focus on creating beautiful,
            performant, and scalable applications.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick About Section */}
      <div className="quick-about-section" ref={aboutRef}>
        <div className="quick-about-container">
          <div className="quick-about-content">
            <h2>About Me</h2>
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with a love for creating elegant solutions
                to complex problems. My journey in tech started with a curiosity about how things work,
                and it has evolved into a career dedicated to building exceptional digital experiences.
              </p>
              <p>
                With expertise spanning React, PHP, JavaScript, and MySQL, I've successfully delivered
                projects that combine technical excellence with user-centric design. I'm committed to
                writing clean, maintainable code and staying current with industry best practices.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or working on side projects that challenge me to learn and grow.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline">
              Learn More About Me →
            </Link>
          </div>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Goal Oriented</h3>
              <p>Focused on delivering results that matter</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💡</div>
              <h3>Creative Thinker</h3>
              <p>Innovative solutions to challenging problems</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <h3>Performance First</h3>
              <p>Building fast, optimized applications</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3>Team Player</h3>
              <p>Collaborative and communicative</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section" ref={ctaRef}>
        <h2>Ready to Start Your Project?</h2>
        <p>Let's work together to bring your vision to life</p>
        <Link to="/contact" className="btn btn-large">
          Contact Me Today
        </Link>
      </div>
    </section>
  );
}

export default Home;
