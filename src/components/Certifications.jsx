import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    title: "AI Apps with Python & Flask",
    issuer: "IBM",
    color: "#0530ad",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    color: "#0530ad",
  },
  {
    title: "AI Agents using RAG & LangChain",
    issuer: "IBM",
    color: "#0530ad",
  },
  {
    title: "Generative AI Foundational Models",
    issuer: "IBM",
    color: "#0530ad",
  },
  {
    title: "Deep Learning with Keras",
    issuer: "IBM",
    color: "#0530ad",
  },
  {
    title: "Trading & ML on GCP",
    issuer: "Google Cloud",
    color: "#4285f4",
  },
  {
    title: "Python for Everybody",
    issuer: "University of Michigan",
    color: "#00274c",
  },
  {
    title: "Time Series Mastery",
    issuer: "Coursera",
    color: "#0056d2",
  },
];

const Certifications = () => {
  return (
    <section className="certs-section" id="certifications">
      <div className="certs-container">
        <h2 className="section-title reveal-up">Verified Credentials</h2>

        <div className="certs-scroll reveal-up delay-200">
          <div className="certs-track">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="cert-card"
                style={{ '--issuer-color': cert.color }}
              >
                <div className="cert-icon">
                  <Award size={20} />
                </div>
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
                <div className="cert-badge" style={{ background: cert.color }}>
                  {cert.issuer.split(' ')[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
