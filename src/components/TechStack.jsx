import React from 'react';
import './TechStack.css';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const technologies = [
  { name: "Python", icon: `${DEVICON}/python/python-original.svg`, size: "lg" },
  { name: "TensorFlow", icon: `${DEVICON}/tensorflow/tensorflow-original.svg`, size: "lg" },
  { name: "React", icon: `${DEVICON}/react/react-original.svg`, size: "md" },
  { name: "PyTorch", icon: `${DEVICON}/pytorch/pytorch-original.svg`, size: "lg" },
  { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg`, size: "md" },
  { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`, size: "md" },
  { name: "Flask", icon: `${DEVICON}/flask/flask-original.svg`, size: "sm" },
  { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg`, size: "md" },
  { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg`, size: "sm" },
  { name: "Pandas", icon: `${DEVICON}/pandas/pandas-original.svg`, size: "md" },
  { name: "NumPy", icon: `${DEVICON}/numpy/numpy-original.svg`, size: "sm" },
  { name: "Keras", icon: `${DEVICON}/keras/keras-original.svg`, size: "sm" },
  { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg`, size: "md" },
  { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg`, size: "sm" },
  { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg`, size: "sm" },
  { name: "GCP", icon: `${DEVICON}/googlecloud/googlecloud-original.svg`, size: "sm" },
  { name: "Git", icon: `${DEVICON}/git/git-original.svg`, size: "sm" },
  { name: "Selenium", icon: `${DEVICON}/selenium/selenium-original.svg`, size: "sm" },
  { name: "Flutter", icon: `${DEVICON}/flutter/flutter-original.svg`, size: "sm" },
  { name: "C++", icon: `${DEVICON}/cplusplus/cplusplus-original.svg`, size: "sm" },
  { name: "Java", icon: `${DEVICON}/java/java-original.svg`, size: "sm" },
  { name: "LangChain", icon: null, size: "lg" },
  { name: "RAG", icon: null, size: "md" },
  { name: "LLMs", icon: null, size: "lg" },
  { name: "NLP", icon: null, size: "md" },
  { name: "REST APIs", icon: null, size: "sm" },
  { name: "Scikit-Learn", icon: null, size: "sm" },
  { name: "SQL", icon: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg`, size: "sm" },
];

function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const TechStack = () => {
  const coins = technologies.map((tech, i) => {
    const seed = i * 137.508;
    const rotation = (seededRandom(seed) - 0.5) * 16;
    const marginTop = seededRandom(seed + 1) * 20;
    const marginRight = seededRandom(seed + 2) * 12;
    const delay = seededRandom(seed + 3) * 5;
    const duration = 3.5 + seededRandom(seed + 4) * 3;

    return { ...tech, rotation, marginTop, marginRight, delay, duration };
  });

  return (
    <section className="techstack-section" id="techstack">
      <div className="techstack-container">
        <h2 className="section-title reveal-up">Arsenal</h2>
        <div className="coin-field reveal-up delay-200">
          {coins.map((coin) => (
            <div
              key={coin.name}
              className={`tech-coin coin-${coin.size}`}
              style={{
                '--rotation': `${coin.rotation}deg`,
                '--float-delay': `${coin.delay}s`,
                '--float-duration': `${coin.duration}s`,
                marginTop: `${coin.marginTop}px`,
                marginRight: `${coin.marginRight}px`,
              }}
            >
              {coin.icon ? (
                <img src={coin.icon} alt={coin.name} className="tech-logo" loading="lazy" />
              ) : (
                <span className="tech-text-icon">{coin.name}</span>
              )}
              <span className="tech-label">{coin.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
