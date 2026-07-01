import React, { useEffect } from 'react';
import Starfield from '../components/Starfield';
import Hero from '../components/Hero';
import About from '../components/About';
import FreelanceCredentials from '../components/FreelanceCredentials';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../App.css';

function HomePage() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(el => observer.observe(el));

    const progressLine = document.querySelector('.scroll-progress-line');
    const handleScroll = () => {
      if (!progressLine) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      progressLine.style.transform = `scaleY(${progress})`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll to hash if present (e.g. /#portfolio)
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Starfield />
      <div className="scroll-progress-container">
        <div className="scroll-progress-line"></div>
      </div>
      <main>
        <Hero />
        <About />
        <FreelanceCredentials />
        <TechStack />
        <Experience />
        <Services />
        <Portfolio />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
