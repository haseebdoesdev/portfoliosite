import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const stats = [
  { target: 4, suffix: '+', label: 'Years Experience' },
  { target: 200, suffix: '+', label: 'Scrapers Built' },
  { target: 500, suffix: '+', label: 'Community Members' },
  { target: 10, suffix: '+', label: 'Certifications' },
];

const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span className="stat-number" ref={ref}>{count}{suffix}</span>;
};

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
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
