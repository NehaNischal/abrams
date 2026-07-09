import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import heroVideo from '../assets/hero_video.mp4';

const Hero = ({ onNavigate, isLoaded = true }) => {
  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4 // Delay title animation slightly for initial fade-in
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const btnsVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] } // Fade buttons in after description
    }
  };

  const titleWords = ["The", "Mix", "of"];
  const goldWords = ["Golden", "Spices"];

  return (
    <section className="hero" id="home">
      <motion.video 
        className="hero-video-bg" 
        src={heroVideo} 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="hero-overlay" />
      
      <div className="container hero-container">
        <div className="hero-content">
          
          <motion.h1 
            variants={titleContainerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="hero-title"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={`title-${i}`}
                variants={wordVariants}
                style={{ display: 'inline-block', marginRight: '0.22em' }}
              >
                {word}
              </motion.span>
            ))}
            {goldWords.map((word, i) => (
              <motion.span
                key={`gold-${i}`}
                variants={wordVariants}
                className="gold-text-span"
                style={{ display: 'inline-block', marginRight: '0.22em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-description"
          >
            "Experience the luxury of pure organic spices, crafted with integrity."
          </motion.p>
          
          <motion.div 
            variants={btnsVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="hero-btns"
          >
            <a href="#collection" className="btn btn-outline">Shop Collection</a>
            <button onClick={() => onNavigate('plantation')} className="btn btn-primary">Plantation</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
