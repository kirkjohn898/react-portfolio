import React, { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/pages/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  useScrollAnimation(headerRef);
  useScrollAnimation(infoRef);
  useScrollAnimation(formRef);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (err) {
      setError('Error sending message. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-header" ref={headerRef}>
          <h1>Let's Connect</h1>
          <div className="header-underline"></div>
          <p className="contact-subtitle">Have a project in mind? Let's work together!</p>
        </div>

        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info" ref={infoRef}>
            <h2>Get in Touch</h2>
            <p className="info-intro">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out using any of the methods below.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:normiemarapo@email.com">normiemarapo@email.com</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">💼</div>
                <div>
                  <h3>LinkedIn</h3>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Connect with me</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🐙</div>
                <div>
                  <h3>GitHub</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">View my work</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="error-message">
                ✗ {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
