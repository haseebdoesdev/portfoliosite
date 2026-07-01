import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, GitBranch } from 'lucide-react';
import { getProject } from '../data/projects';
import MermaidChart from '../components/diagrams/MermaidChart';
import './ProjectDetail.css';

const TechBadge = ({ tech }) => {
  const [imgError, setImgError] = useState(false);
  const iconUrl = `https://cdn.simpleicons.org/${tech.icon}/${tech.color || '10b981'}`;

  return (
    <div className="tech-badge">
      {!imgError ? (
        <img
          src={iconUrl}
          alt={tech.name}
          className="tech-badge-icon"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="tech-badge-icon-fallback">{tech.name[0]}</div>
      )}
      <div className="tech-badge-info">
        <span className="tech-badge-name">{tech.name}</span>
        <span className="tech-badge-role">{tech.role}</span>
      </div>
    </div>
  );
};

const ScopeCard = ({ item }) => (
  <div className="scope-card">
    <span className="scope-value">{item.value}</span>
    <span className="scope-label">{item.label}</span>
  </div>
);

const DiagramSection = ({ title, description, chart, type }) => (
  <div className="diagram-section">
    <div className="diagram-header">
      <div className="diagram-type-tag">{type}</div>
      <h3 className="diagram-title">{title}</h3>
      {description && <p className="diagram-description">{description}</p>}
    </div>
    <div className="diagram-canvas">
      <MermaidChart chart={chart} title={title} />
    </div>
  </div>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="detail-not-found">
        <p>Mission log not found: <code>{slug}</code></p>
        <Link to="/#portfolio" className="back-link">← Return to portfolio</Link>
      </div>
    );
  }

  const statusClass = project.status.toLowerCase().replace(' ', '-');

  return (
    <div className="detail-wrapper">
      {/* Back nav */}
      <nav className="detail-nav">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} />
          <span>Mission Log</span>
        </button>
        <span className="detail-nav-id">{project.id}</span>
      </nav>

      {/* Hero */}
      <header className="detail-hero">
        <div className="detail-hero-inner">
          <div className="detail-meta-row">
            <span className="detail-id">{project.id}</span>
            <span className={`detail-status ${statusClass}`}>
              <span className="status-dot" />
              {project.status}
            </span>
            <span className="detail-category">{project.category}</span>
          </div>

          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-subtitle">{project.subtitle}</p>
          <p className="detail-tagline">{project.tagline}</p>

          <div className="detail-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="detail-action-btn secondary">
                <GitBranch size={15} />
                Source Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="detail-action-btn primary">
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="detail-content">

        {/* Overview */}
        <section className="detail-section">
          <h2 className="detail-section-title">
            <span className="section-tag">01</span>
            Overview
          </h2>
          <div className="overview-text">
            {project.overview.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Scope */}
        {project.scope && (
          <section className="detail-section">
            <h2 className="detail-section-title">
              <span className="section-tag">02</span>
              Scope &amp; Scale
            </h2>
            <div className="scope-grid">
              {project.scope.map((item, i) => (
                <ScopeCard key={i} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <section className="detail-section">
            <h2 className="detail-section-title">
              <span className="section-tag">03</span>
              Technology Stack
            </h2>
            <div className="tech-grid">
              {project.techStack.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>
          </section>
        )}

        {/* Architecture */}
        {project.architecture && (
          <section className="detail-section diagrams-section">
            <h2 className="detail-section-title">
              <span className="section-tag">04</span>
              System Architecture
            </h2>
            <p className="detail-section-intro">{project.architecture.description}</p>
            <DiagramSection
              title="Architecture Overview"
              type="GRAPH LR"
              chart={project.architecture.diagram}
            />
          </section>
        )}

        {/* Sequence Diagram */}
        {project.sequenceDiagram && (
          <section className="detail-section diagrams-section">
            <h2 className="detail-section-title">
              <span className="section-tag">05</span>
              Sequence Diagram
            </h2>
            <p className="detail-section-intro">
              End-to-end request flow showing how each participant interacts over time. User is the leftmost lifeline; the request propagates right across the system.
            </p>
            <DiagramSection
              title="Request Lifecycle"
              type="SEQUENCE"
              chart={project.sequenceDiagram}
            />
          </section>
        )}

        {/* Activity Diagram */}
        {project.activityDiagram && (
          <section className="detail-section diagrams-section">
            <h2 className="detail-section-title">
              <span className="section-tag">06</span>
              Activity Diagram
            </h2>
            <p className="detail-section-intro">
              Decision flow and branching logic through the system — from user input validation to all downstream automation paths.
            </p>
            <DiagramSection
              title="Control Flow"
              type="FLOWCHART"
              chart={project.activityDiagram}
            />
          </section>
        )}

      </div>

      {/* Footer nav */}
      <div className="detail-footer-nav">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} />
          Back to Portfolio
        </button>
        <span className="detail-timestamp">TS: {project.timestamp}</span>
      </div>
    </div>
  );
};

export default ProjectDetail;
