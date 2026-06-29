import React from 'react';
import { GitBranch, Link, Mail, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">AH.</span>
            <p>Full Stack AI Engineer — building end-to-end ML solutions.</p>
          </div>

          <div className="footer-links">
            <a href="#about">Origin</a>
            <a href="#services">Capabilities</a>
            <a href="#portfolio">Mission Log</a>
            <a href="#contact">Transmit</a>
          </div>
        </div>

        <div className="footer-platforms">
          <a href="https://www.fiverr.com/s/NNvBlRV" target="_blank" rel="noopener noreferrer" className="platform-link">
            <ExternalLink size={14} />
            <span>Fiverr</span>
          </a>
          <a href="https://www.upwork.com/freelancers/~017c702bc7da4b5e30" target="_blank" rel="noopener noreferrer" className="platform-link">
            <ExternalLink size={14} />
            <span>Upwork</span>
          </a>
          <a href="https://www.kaggle.com/abdulhaseeb266" target="_blank" rel="noopener noreferrer" className="platform-link">
            <ExternalLink size={14} />
            <span>Kaggle</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Abdul Haseeb. All systems operational.
          </p>
          <div className="social-links">
            <a href="https://github.com/haseebdoesdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitBranch size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abdul-haseeb-1a5803287/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Link size={20} />
            </a>
            <a href="mailto:abdlhaseeb17@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
