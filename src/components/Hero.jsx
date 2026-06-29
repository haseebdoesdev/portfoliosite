import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "ML Engineer & Full Stack Developer — building end-to-end AI solutions, from data pipelines to production deployments.";

  useEffect(() => {
    let currentLength = 0;
    const typeInterval = setInterval(() => {
      currentLength++;
      setTypedText(fullText.substring(0, currentLength));
      if (currentLength >= fullText.length) {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-badge reveal-up">Full Stack AI Engineer</div>
        <h1 className="hero-title reveal-up delay-100">
          Abdul Haseeb
        </h1>
        <p className="hero-tagline reveal-up delay-200">
          {typedText}
          <span className="cursor"></span>
        </p>

        <div className="hero-ctas reveal-up delay-300">
          <a href="#portfolio" className="cta-primary">
            View My Work
          </a>
          <a href="#contact" className="cta-secondary">
            Contact Me
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-resume">
            <Download size={16} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
