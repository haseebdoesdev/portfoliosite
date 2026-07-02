import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse coordinates for parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 3000); // density
      
      for (let i = 0; i < numStars; i++) {
        // 3 depth layers: 1 = furthest, 3 = closest
        const layer = Math.random() < 0.7 ? 1 : Math.random() < 0.9 ? 2 : 3;
        
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: layer * 0.6 + Math.random() * 0.5,
          layer: layer,
          opacity: Math.random(),
          opacitySpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          // Base vertical drift speed depending on layer
          vy: layer * 0.05
        });
      }
    };


    let shootingStars = [];
    const drawShootingStar = () => {
       // Just adding to array, drawing handled in main loop if we want to trace
       // For simplicity, we just draw a quick line for one frame or manage state
       // Actually, to make it fade, we need it in state. Let's add it to a separate array.
       shootingStars.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height * 0.5,
         length: Math.random() * 80 + 20,
         speed: Math.random() * 10 + 5,
         angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1), // ~45 deg
         opacity: 0.5,
         life: 1.0
       });
    };

    const renderShootingStars = () => {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        let ss = shootingStars[i];
        ss.x -= Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.life -= 0.02;
        
        if (ss.life <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x + Math.cos(ss.angle) * ss.length, ss.y - Math.sin(ss.angle) * ss.length);
        ctx.strokeStyle = `rgba(110, 231, 183, ${ss.life * ss.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    // Replace the main draw loop with one that calls renderShootingStars
    const mainDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#050b14');
      gradient.addColorStop(1, '#0a1628');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Scroll offset parallax
      const scrollY = window.scrollY;

      stars.forEach(star => {
        star.opacity += star.opacitySpeed;
        if (star.opacity <= 0.1 || star.opacity >= 0.8) {
          star.opacitySpeed *= -1;
        }

        if (!prefersReducedMotion) {
          // Slow vertical drift
          star.y -= star.vy;
          
          // Parallax from mouse
          const parallaxX = (mouseX / canvas.width - 0.5) * star.layer * 15;
          const parallaxY = (mouseY / canvas.height - 0.5) * star.layer * 15;
          
          // Parallax from scroll
          const scrollParallaxY = scrollY * (star.layer * 0.15);

          let drawX = star.x + parallaxX;
          let drawY = star.y + parallaxY - scrollParallaxY;

          // Wrap logic
          // Needs to wrap cleanly even with scroll
          drawY = ((drawY % canvas.height) + canvas.height) % canvas.height;
          drawX = ((drawX % canvas.width) + canvas.width) % canvas.width;
          
          // Calculate opacity based on layer so further stars are dimmer
          const layerOpacity = star.layer === 1 ? 0.3 : star.layer === 2 ? 0.6 : 0.9;
          const finalOpacity = star.opacity * layerOpacity;

          ctx.fillStyle = `rgba(226, 232, 240,${finalOpacity})`; // slate-500 roughly
          ctx.beginPath();
          ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const finalOpacity = star.opacity * (star.layer * 0.3);
          ctx.fillStyle = `rgba(226, 232, 240,${finalOpacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (!prefersReducedMotion) {
        if (Math.random() < 0.005) drawShootingStar();
        renderShootingStars();
      }

      animationFrameId = window.requestAnimationFrame(mainDraw);
    };

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', resize);
    
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    resize();
    mainDraw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default Starfield;
