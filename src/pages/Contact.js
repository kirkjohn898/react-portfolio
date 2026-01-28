import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/pages/Contact.css';

function ContactPage() {
  const headerRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      console.log('Sending form data:', formData);
      
      const apiUrl = process.env.REACT_APP_API_CONTACT || 'http://localhost:8000/api/contact.php';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (err) {
      console.error('Error details:', err);
      
      if (err.message.includes('Failed to fetch')) {
        setError('Cannot connect to server. Make sure PHP backend is running on port 8000.');
      } else {
        setError('Error sending message. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-header" ref={headerRef}>
          <h1>Get In Touch</h1>
          <div className="header-underline"></div>
          <p className="contact-subtitle">Let's discuss your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info" ref={infoRef}>
            <h2>Contact Information</h2>
            <p className="info-intro">
              Have a question or want to collaborate? I'd love to hear from you!
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
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    Visit My Profile
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🐙</div>
                <div>
                  <h3>GitHub</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    View My Work
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+1234567890">+639620835549</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully. I'll get back to you soon!
              </div>
            )}
            {error && (
              <div className="error-message">
                ✗ {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me more about your project..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
