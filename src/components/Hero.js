import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm a Developer</h1>
        <p>Welcome to my portfolio. I build amazing web experiences.</p>
        <a href="#portfolio" className="cta-button">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
