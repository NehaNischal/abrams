import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// Import actual product PNG assets
import cloveImg from '../assets/clove.png';
import pepperImg from '../assets/black_pepper.png';
import gingerImg from '../assets/ginger.png';
import coffeeImg from '../assets/coffee.png';

const Hero = ({ onNavigate }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: null, y: null, radius: 180 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Setup actual spice PNG watermarks
    const clove = new Image();
    clove.src = cloveImg;

    const pepper = new Image();
    pepper.src = pepperImg;

    const ginger = new Image();
    ginger.src = gingerImg;

    const coffee = new Image();
    coffee.src = coffeeImg;

    const spiceImages = [clove, pepper, ginger, coffee];

    // Small interactive gold/olive spice particles
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 3.5 + 1.2;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        const colors = [
          'rgba(75, 83, 32, 0.18)', // Soft olive
          'rgba(93, 64, 55, 0.14)',  // Brand brown
          'rgba(45, 27, 78, 0.12)',  // Dark violet
          'rgba(212, 175, 55, 0.15)'  // Pale gold
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Natural float
        this.x += this.speedX;
        this.y += this.speedY;
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Wrap around screen boundaries
        if (this.x < 0) { this.x = width; this.baseX = width; }
        if (this.x > width) { this.x = 0; this.baseX = 0; }
        if (this.y < 0) { this.y = height; this.baseY = height; }
        if (this.y > height) { this.y = 0; this.baseY = 0; }

        // Mouse interaction (repulsion with smooth spring return)
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            
            // Push particles away
            this.x -= forceDirectionX * force * 4;
            this.y -= forceDirectionY * force * 4;
          }
        }

        // Return to home base if mouse leaves or is far
        let dxBase = this.baseX - this.x;
        let dyBase = this.baseY - this.y;
        this.x += dxBase * 0.08;
        this.y += dyBase * 0.08;
      }
    }

    // Large floating organic spices (clove, pepper, ginger, coffee)
    class FloatingSpice {
      constructor(img) {
        this.img = img;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 45 + 35; // Size between 35px and 80px
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.005 - 0.0025; // Slow rotation
        this.speedX = Math.random() * 0.16 - 0.08;
        this.speedY = Math.random() * 0.12 + 0.04; // Slow descent
        this.parallaxFactor = Math.random() * 15 + 10; // Parallax response factor
      }

      draw() {
        if (!this.img.complete) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Extremely soft opacity watermark to keep foreground text 100% legible
        ctx.globalAlpha = 0.055;
        
        ctx.drawImage(this.img, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
        ctx.globalAlpha = 1.0; // Reset
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.baseX += this.speedX;
        this.baseY += this.speedY;
        this.angle += this.spin;

        // Wrap around boundaries
        if (this.x < -100) { this.x = width + 100; this.baseX = width + 100; }
        if (this.x > width + 100) { this.x = -100; this.baseX = -100; }
        if (this.y < -100) { this.y = height + 100; this.baseY = height + 100; }
        if (this.y > height + 100) { this.y = -100; this.baseY = -100; }

        // Parallax mouse follow
        if (mouse.x !== null && mouse.y !== null) {
          let targetX = (mouse.x - width / 2) / this.parallaxFactor;
          let targetY = (mouse.y - height / 2) / this.parallaxFactor;
          
          this.x += (this.baseX + targetX - this.x) * 0.04;
          this.y += (this.baseY + targetY - this.y) * 0.04;
        } else {
          let dxBase = this.baseX - this.x;
          let dyBase = this.baseY - this.y;
          this.x += dxBase * 0.04;
          this.y += dyBase * 0.04;
        }
      }
    }

    const particles = [];
    const spices = [];

    // Initialize systems
    for (let i = 0; i < 65; i++) {
      particles.push(new Particle());
    }
    for (let i = 0; i < 16; i++) {
      const img = spiceImages[i % spiceImages.length];
      spices.push(new FloatingSpice(img));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update spices (background watermark plane)
      for (let i = 0; i < spices.length; i++) {
        spices[i].update();
        spices[i].draw();
      }

      // Draw and update particles + connection lines
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect close particles with delicate cobweb lines
        for (let j = i + 1; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(75, 83, 32, ${0.08 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle"
          >
            ESTABLISHED IN PURITY
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="hero-title"
          >
            Nature’s Finest, <br />
            <span>Handpicked for You</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-description"
          >
            Experience the luxury of premium, organic spices and coffee sourced 
            from the world's most sustainable plantations. Elevate your culinary 
            journey with Abrams.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="hero-btns"
          >
            <a href="#collection" className="btn btn-outline">Shop Collection</a>
            <button onClick={() => onNavigate('plantation')} className="btn btn-primary">Plantation</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
