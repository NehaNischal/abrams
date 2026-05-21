import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.98 }}
          className="nav-logo"
        >
          <Logo className="nav-logo-svg" />
        </motion.div>
        
        <ul className="nav-links">
          {['Home', 'Story', 'Products', 'Why Us', 'Contact'].map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15, 
                delay: index * 0.08 + 0.1 
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={`#${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="nav-cta"
        >
          <a href="#contact" className="btn btn-primary">Inquiry</a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
