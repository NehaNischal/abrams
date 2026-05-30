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
                  e.preventDefault();
                  if (item === 'Products') {
                    if (onNavigate) onNavigate('products-page');
                  } else if (item === 'Why Us') {
                    if (onNavigate) onNavigate('why-us-page');
                  } else if (item === 'About Us') {
                    if (onNavigate) onNavigate('about-us-page');
                  } else if (item === 'Visuals') {
                    if (onNavigate) onNavigate('visuals-page');
                  } else if (item === 'Home') {
                    if (onNavigate) onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (item === 'Contact') {
                    if (onNavigate) onNavigate('home');
                    setTimeout(() => {
                      const contactEl = document.getElementById('contact');
                      if (contactEl) {
                        const navbarHeight = 80;
                        const elementPosition = contactEl.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - navbarHeight;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }, 100);
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
