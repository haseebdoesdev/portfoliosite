import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, GitBranch } from 'lucide-react';
import { projects } from '../data/projects';
import './Portfolio.css';

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title reveal-up">Mission Log: Selected Work</h2>
        <p className="portfolio-subtitle reveal-up delay-100">
          A selection of projects spanning ML systems, AI agents, data pipelines, and full-stack applications.
          Private client work has limited source visibility.
        </p>

        <div className="mission-log-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              role="link"
              tabIndex={0}
              onClick={() => navigate(`/project/${project.slug}`)}
              onKeyDown={e => e.key === 'Enter' && navigate(`/project/${project.slug}`)}
              className={`mission-card reveal-up delay-${(index % 4 + 1) * 100}`}
            >
              <div className="mission-header">
                <span className="mission-id">{project.id}</span>
                <span className={`mission-status ${project.status.toLowerCase()}`}>
                  STATUS: {project.status}
                </span>
              </div>
              <div className="mission-body">
                <h3>{project.title}</h3>
                <span className="mission-category">{project.category}</span>
                <p>{project.description}</p>
                <div className="mission-tech">
                  {(project.techStack || []).slice(0, 5).map((t) => (
                    <span key={t.name} className="tech-tag">{t.name}</span>
                  ))}
                  {(project.techStack || []).length > 5 && (
                    <span className="tech-tag">+{project.techStack.length - 5}</span>
                  )}
                </div>
              </div>
              <div className="mission-footer">
                <div className="mission-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mission-link"
                      onClick={e => e.stopPropagation()}
                    >
                      <GitBranch size={14} />
                      <span>Source</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mission-link live-link"
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="mission-private">Private Client Work</span>
                  )}
                </div>
                <span className="mission-timestamp">TS: {project.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
