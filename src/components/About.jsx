import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title reveal-up">Mission Log: Origin</h2>
        <div className="about-content reveal-up delay-100">
          <p>
            I'm Abdul Haseeb from Faisalabad, Pakistan — an ML Engineer with 4+ years of experience deploying end-to-end solutions in time-series forecasting, Generative AI, NLP, and algorithmic trading. Currently pursuing BS Computer Science at COMSATS University Islamabad (2023–2027).
          </p>
          <p>
            I've been freelancing since 2023, working with international clients across Australia and the USA — architecting forex trading systems for quant firms, building autonomous AI agent suites with RAG integration, developing AI Voice Caller agents, and creating 200+ custom web scrapers for large-scale data extraction and lead generation.
          </p>
          <p>
            As the Data Science Co-Lead at GDG (Google Developer Groups) COMSATS, I lead 500+ students in DS/ML initiatives, organizing workshops on Generative AI, RAG, and ML deployment. I build production-grade systems designed to scale — from data pipelines to cloud deployments.
          </p>
        </div>

        <div className="about-stats reveal-up delay-200">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Scrapers Built</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Community Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
