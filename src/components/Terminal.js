import React, { useState, useEffect } from 'react';
import '../styles/Terminal.css';

function Terminal() {
  const languages = [
    'React',
    'PHP',
    'JavaScript',
    'Java',
    'C#',
    'C',
    'MySQL',
    'Python'
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLanguage = languages[currentLanguageIndex];
    let timer;

    if (!isDeleting) {
      // Typing phase
      if (currentCharIndex < currentLanguage.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentLanguage.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, 80);
      } else {
        // Text fully typed, wait 5 seconds then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 5000);
      }
    } else {
      // Deleting phase
      if (currentCharIndex > 0) {
        timer = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex - 1);
          setDisplayedText(currentLanguage.substring(0, currentCharIndex - 1));
        }, 50);
      } else {
        // Text fully deleted, move to next language
        setIsDeleting(false);
        setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentLanguageIndex, isDeleting, languages]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-btn terminal-btn-red"></div>
          <div className="terminal-btn terminal-btn-yellow"></div>
          <div className="terminal-btn terminal-btn-green"></div>
        </div>
        <div className="terminal-title">developer@portfolio ~ %</div>
      </div>
      <div className="terminal-body">
        <div className="terminal-intro">
          <div className="terminal-line">
            <span className="terminal-prefix">{'>'}</span>
            <span className="terminal-text">Hello! I'm a Full-Stack Developer</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-prefix">{'>'}</span>
            <span className="terminal-text">I work with these languages:</span>
          </div>
        </div>
        <div className="terminal-line typing-line">
          <span className="terminal-prefix">{'>'}</span>
          <span className="terminal-text">
            {displayedText}
            <span className="terminal-cursor">▮</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
