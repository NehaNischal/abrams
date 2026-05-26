import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import './Navbar.css';

const Navbar = ({ onNavigate, isLoaded = true }) => {
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
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: isLoaded ? 0.3 : 0 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.98 }}
          className="nav-logo"
        >
          <Logo className="nav-logo-svg" />
        </motion.div>
        
        <ul className="nav-links">
          {['Home', 'About Us', 'Products', 'Why Us', 'Visuals', 'Contact'].map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15, 
                delay: isLoaded ? (index * 0.08 + 0.4) : 0 
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={item === 'Visuals' ? '#gallery' : `#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => {
                  if (item === 'Products') {
                    e.preventDefault();
                    if (onNavigate) onNavigate('products-page');
                  } else if (item === 'Why Us') {
                    e.preventDefault();
                    if (onNavigate) onNavigate('why-us-page');
                  } else if (item === 'About Us') {
                    e.preventDefault();
                    if (onNavigate) onNavigate('about-us-page');
                  } else if (item === 'Visuals') {
                    e.preventDefault();
                    if (onNavigate) onNavigate('visuals-page');
                  }
                }}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>


      </div>
    </nav>
  );
};

export default Navbar;
