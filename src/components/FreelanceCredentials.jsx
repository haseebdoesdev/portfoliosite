import React from 'react';
import './FreelanceCredentials.css';

const UpworkTopRatedBadge = () => (
  <svg viewBox="0 0 36 36" className="platform-badge-svg" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="34" height="34" rx="8" fill="#14a800" opacity="0.1" stroke="#14a800" strokeWidth="1.5"/>
    <path d="M10 24V17h4v7h-4zm6 0V13h4v11h-4zm6 0V10h4v14h-4z" fill="#14a800"/>
    <path d="M10 16l5-4 5 3 6-5" stroke="#14a800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M23 10l3 0 0 3" stroke="#14a800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const FiverrLevelBadge = () => (
  <svg viewBox="0 0 36 36" className="platform-badge-svg" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="34" height="34" rx="8" fill="#1dbf73" opacity="0.1" stroke="#1dbf73" strokeWidth="1.5"/>
    <circle cx="18" cy="16" r="7" fill="#1dbf73" opacity="0.15" stroke="#1dbf73" strokeWidth="1.5"/>
    <text x="18" y="20" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#1dbf73">2</text>
    <path d="M13 24l-2 5h14l-2-5" fill="#1dbf73" opacity="0.2" stroke="#1dbf73" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

const FreelanceCredentials = () => {
  return (
    <section className="freelance-section" id="freelance">
      <div className="freelance-container">
        <h2 className="section-title reveal-up">Trusted Worldwide</h2>

        <div className="credentials-row reveal-up delay-200">
          <a
            href="https://www.upwork.com/freelancers/~017c702bc7da4b5e30"
            target="_blank"
            rel="noopener noreferrer"
            className="credential-card"
          >
            <div className="credential-logo-area">
              <img src="/upwork-logo.svg" alt="Upwork" className="platform-logo" />
            </div>
            <div className="credential-badges-row">
              <UpworkTopRatedBadge />
              <span className="credential-badge badge-upwork">
                <span className="badge-dot"></span>
                Top Rated
              </span>
            </div>
            <div className="credential-info">
              <p className="credential-desc">Delivering high-quality AI & ML solutions to international clients</p>
            </div>
          </a>

          <a
            href="https://www.fiverr.com/s/NNvBlRV"
            target="_blank"
            rel="noopener noreferrer"
            className="credential-card"
          >
            <div className="credential-logo-area">
              <img src="/fiverr-wordmark.svg" alt="Fiverr" className="platform-logo fiverr-logo" />
            </div>
            <div className="credential-badges-row">
              <FiverrLevelBadge />
              <span className="credential-badge badge-fiverr">
                <span className="badge-dot"></span>
                Level 2 Seller
              </span>
            </div>
            <div className="credential-info">
              <p className="credential-desc">Specializing in ML systems, automation, and data engineering</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreelanceCredentials;
