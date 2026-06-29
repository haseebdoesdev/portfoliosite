import React from 'react';
import { Bot, ScanSearch, Globe, BrainCircuit, Database } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: "Generative AI & LLMs",
    description: "RAG pipelines, autonomous agents, LangChain integrations, and prompt engineering — building context-aware AI systems that solve real business problems.",
    icon: <Bot className="service-icon bot-icon" />,
  },
  {
    id: 2,
    title: "Scrapers & Data Pipelines",
    description: "200+ custom scrapers built for large-scale market research and lead generation. ETL pipelines handling complex anti-bot measures and dynamic content.",
    icon: <ScanSearch className="service-icon scanner-icon" />,
  },
  {
    id: 3,
    title: "Machine Learning & AI",
    description: "Time-series forecasting, NLP, computer vision, and deep learning models — from training to production deployment on cloud infrastructure.",
    icon: <BrainCircuit className="service-icon brain-icon" />,
  },
  {
    id: 4,
    title: "Full Stack Development",
    description: "High-performance web applications with React, Flask, FastAPI, and Node.js. REST APIs, real-time systems, and scalable cloud deployments.",
    icon: <Globe className="service-icon globe-icon" />,
  },
  {
    id: 5,
    title: "Data Engineering",
    description: "End-to-end data pipelines, cloud infrastructure on AWS/GCP/OCI, Docker containerization, and production-grade ML system deployment.",
    icon: <Database className="service-icon db-icon" />,
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="section-title reveal-up">Core Capabilities</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card reveal-up delay-${(index % 4 + 1) * 100}`}
            >
              <div className="service-icon-wrapper">
                {service.icon}
                <div className="icon-glow"></div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
