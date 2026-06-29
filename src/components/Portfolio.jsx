import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    id: "LOG-01",
    title: "Full-Stack ML Trading System",
    category: "AI / ML",
    status: "COMPLETED",
    description: "Forex trading system for an Australian quant firm — ETL pipeline with 100+ technical indicators, Temporal Fusion Transformer with attention mechanisms achieving 63% out-of-sample accuracy, and live cTrader API integration with ATR-based risk management.",
    tech: ["Python", "TensorFlow", "cTrader API", "Pandas", "TFT"],
    github: null,
    live: null,
    timestamp: "2024.01"
  },
  {
    id: "LOG-02",
    title: "AI Social Media & Voice Agent Suite",
    category: "Generative AI",
    status: "COMPLETED",
    description: "Autonomous agents managing Facebook, WhatsApp, LinkedIn, Instagram & TikTok interactions. Integrated RAG pipelines with LangChain + LLMs for context-aware responses and AI Voice Caller agents with STT/TTS for automated outbound communications.",
    tech: ["Python", "LangChain", "RAG", "STT/TTS", "LLMs"],
    github: "https://github.com/haseebdoesdev/TiktokSocialAI",
    live: null,
    timestamp: "2024.06"
  },
  {
    id: "LOG-03",
    title: "Automation Build & Lead Handling",
    category: "Full Stack AI",
    status: "COMPLETED",
    description: "End-to-end lead generation and handling automation system. Scrapes, processes, and manages leads with intelligent routing and automated follow-ups for US-based clients.",
    tech: ["Python", "Automation", "Web Scraping", "APIs"],
    github: "https://github.com/haseebdoesdev/automation_build_lead_handling",
    live: null,
    timestamp: "2024.08"
  },
  {
    id: "LOG-04",
    title: "Multi-Agent Robotic Warehouse",
    category: "AI / ML",
    status: "COMPLETED",
    description: "Multi-agent system simulating robotic warehouse operations with intelligent task allocation, path planning, and coordination between autonomous agents.",
    tech: ["Python", "Multi-Agent Systems", "AI Planning"],
    github: "https://github.com/haseebdoesdev/multi-agent-robotic-warehouse-system",
    live: null,
    timestamp: "2024.09"
  },
  {
    id: "LOG-05",
    title: "Goodreads Review Analysis & Network Science",
    category: "NLP / Data Science",
    status: "COMPLETED",
    description: "Scraped 15,000+ reviews via GraphQL API. Applied VADER Sentiment Analysis and PageRank algorithm for influential reviewer detection and network science analysis.",
    tech: ["Python", "NLP", "VADER", "NetworkX", "GraphQL"],
    github: "https://github.com/haseebdoesdev/goodreads-comments-analysis",
    live: null,
    timestamp: "2024.03"
  },
  {
    id: "LOG-06",
    title: "Face Attendance App",
    category: "Mobile + ML",
    status: "COMPLETED",
    description: "Flutter mobile app using Google ML Kit + FaceNet TFLite (512-dim embeddings) for real-time face recognition with cosine similarity matching and SQLite storage.",
    tech: ["Flutter", "FaceNet", "TFLite", "SQLite", "Dart"],
    github: "https://github.com/haseebdoesdev/mobile_app_face_attendance_app_using_facenet",
    live: null,
    timestamp: "2024.05"
  },
  {
    id: "LOG-07",
    title: "GitHub MCP Server",
    category: "Developer Tools",
    status: "COMPLETED",
    description: "A Model Context Protocol (MCP) server for GitHub repository management — enabling AI assistants to interact with GitHub repos programmatically.",
    tech: ["MCP", "GitHub API", "AI Tools"],
    github: "https://github.com/haseebdoesdev/github-mcp",
    live: null,
    timestamp: "2025.01"
  },
  {
    id: "LOG-08",
    title: "AI Reading Aid",
    category: "Generative AI",
    status: "COMPLETED",
    description: "AI-powered reading assistance tool that helps users comprehend and interact with text content using language models for summarization, Q&A, and analysis.",
    tech: ["TypeScript", "React", "LLMs", "AI"],
    github: "https://github.com/haseebdoesdev/ai-reading-aid",
    live: null,
    timestamp: "2024.07"
  },
  {
    id: "LOG-09",
    title: "Khaleej Job Pipeline",
    category: "Data Engineering",
    status: "COMPLETED",
    description: "Automated job data pipeline scraping, processing, and structuring job listings from the Khaleej region for market research and analysis.",
    tech: ["Python", "Web Scraping", "ETL", "Data Pipeline"],
    github: "https://github.com/haseebdoesdev/khaleej-job-pipeline",
    live: null,
    timestamp: "2024.02"
  },
  {
    id: "LOG-10",
    title: "AI Flashcard Generator",
    category: "Full Stack AI",
    status: "COMPLETED",
    description: "AI-powered flashcard generation tool that automatically creates study materials from input content using language models and spaced repetition.",
    tech: ["TypeScript", "React", "AI", "Next.js"],
    github: "https://github.com/haseebdoesdev/flashcard-generator",
    live: null,
    timestamp: "2024.10"
  },
  {
    id: "LOG-11",
    title: "Facebook Automated Publisher",
    category: "Automation",
    status: "COMPLETED",
    description: "Automated content publishing system for Facebook pages — scheduling, posting, and managing content across multiple pages with intelligent timing.",
    tech: ["Python", "Facebook API", "Automation", "Scheduling"],
    github: "https://github.com/haseebdoesdev/facebook-automated-publisher-teknoraid",
    live: null,
    timestamp: "2024.04"
  },
  {
    id: "LOG-12",
    title: "Emotions Detector",
    category: "Computer Vision",
    status: "COMPLETED",
    description: "Real-time emotion detection system using computer vision to analyze facial expressions and classify emotional states from video feeds.",
    tech: ["JavaScript", "ML", "Computer Vision", "TensorFlow.js"],
    github: "https://github.com/haseebdoesdev/emotions_detector",
    live: null,
    timestamp: "2024.04"
  }
];

const Portfolio = () => {
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
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mission-footer">
                <div className="mission-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="mission-link">
                      <GitBranch size={14} />
                      <span>Source</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="mission-link live-link">
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
