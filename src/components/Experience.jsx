import React from 'react';
import { Briefcase, Users, GraduationCap } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Machine Learning Engineer",
    org: "Axiom Labs",
    period: "2023 — Present",
    type: "work",
    description: "Architected a full-stack forex trading system for an Australian quant firm. Built autonomous AI agent suites with RAG integration and Voice Caller agents for US-based clients.",
    highlights: ["Forex Trading System", "RAG Agents", "Voice AI", "Social Media Automation"],
    icon: <Briefcase size={18} />
  },
  {
    id: 2,
    role: "Data Science Co-Lead",
    org: "GDG COMSATS",
    period: "2026 — Present",
    type: "community",
    description: "Leading 500+ students in DS/ML initiatives. Organizing workshops on Generative AI, RAG, and ML deployment.",
    highlights: ["500+ Members", "GenAI Workshops", "ML Deployment"],
    icon: <Users size={18} />
  },
  {
    id: 3,
    role: "Web Scraping Engineer",
    org: "DataHarvest Co.",
    period: "2020 — Present",
    type: "work",
    description: "Developed 200+ custom scrapers for large-scale market research and lead generation, handling complex anti-bot measures and dynamic content.",
    highlights: ["200+ Scrapers", "Anti-Bot Bypass", "Lead Generation"],
    icon: <Briefcase size={18} />
  },
  {
    id: 4,
    role: "BS Computer Science",
    org: "COMSATS University Islamabad",
    period: "2023 — 2027",
    type: "education",
    description: "Currently in 6th semester. Coursework in AI, Machine Learning, Data Structures, Algorithms, Database Systems, and Software Engineering.",
    highlights: ["6th Semester", "AI/ML Focus", "Dean's List"],
    icon: <GraduationCap size={18} />
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="section-title reveal-up">Mission Timeline</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item reveal-up delay-${(index % 4 + 1) * 100}`}
            >
              <div className="timeline-marker">
                <div className={`marker-icon marker-${exp.type}`}>
                  {exp.icon}
                </div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                  <span className={`timeline-type type-${exp.type}`}>{exp.type}</span>
                </div>
                <h3>{exp.role}</h3>
                <span className="timeline-org">{exp.org}</span>
                <p>{exp.description}</p>
                <div className="timeline-highlights">
                  {exp.highlights.map((h) => (
                    <span key={h} className="highlight-tag">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
