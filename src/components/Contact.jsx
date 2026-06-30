import React from 'react';
import { Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header reveal-up">
          <h2 className="section-title">Initiate Transmission</h2>
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">Status: Online & Receiving</span>
          </div>
        </div>

        <div className="contact-content reveal-up delay-100">
          <p className="contact-intro">
            Currently accepting select projects. If you have a complex technical challenge that requires a precise solution — whether it's ML systems, AI agents, data pipelines, or full-stack applications — reach out through any channel below.
          </p>

          <div className="contact-channels">
            <a href="mailto:abdlhaseeb17@gmail.com" className="channel-card">
              <Mail size={20} />
              <div>
                <span className="channel-label">Email</span>
                <span className="channel-value">abdlhaseeb17@gmail.com</span>
              </div>
            </a>
            <a href="https://www.fiverr.com/s/NNvBlRV" target="_blank" rel="noopener noreferrer" className="channel-card">
              <img src="/fiverr-wordmark.svg" alt="Fiverr" className="channel-icon" />
              <div>
                <span className="channel-label">Fiverr</span>
                <span className="channel-value">Hire me on Fiverr</span>
              </div>
            </a>
            <a href="https://www.upwork.com/freelancers/~017c702bc7da4b5e30" target="_blank" rel="noopener noreferrer" className="channel-card">
              <img src="/upwork-icon.svg" alt="Upwork" className="channel-icon" />
              <div>
                <span className="channel-label">Upwork</span>
                <span className="channel-value">Hire me on Upwork</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/abdul-haseeb-1a5803287/" target="_blank" rel="noopener noreferrer" className="channel-card">
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="channel-icon" />
              <div>
                <span className="channel-label">LinkedIn</span>
                <span className="channel-value">Connect on LinkedIn</span>
              </div>
            </a>
          </div>

          <div className="contact-form-wrapper">
            <h3 className="form-heading">Or send a direct transmission</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Area of Focus</label>
                <select id="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="genai">Generative AI & LLMs</option>
                  <option value="ml">Machine Learning & AI</option>
                  <option value="data">Scrapers & Data Pipelines</option>
                  <option value="web">Full Stack Development</option>
                  <option value="cloud">Data Engineering & Cloud</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Transmission</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
