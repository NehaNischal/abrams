import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = ({ onNavigate, isLoaded = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About Us', 'Products', 'Why Us', 'Visuals', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
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
          {menuItems.map((item, index) => (
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
                    if (onNavigate) onNavigate('home', 'contact');
                  }
                }}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mobile-menu-overlay"
          >
            <ul className="mobile-nav-links">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a 
                    href={item === 'Visuals' ? '#gallery' : `#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
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
                        if (onNavigate) onNavigate('home', 'contact');
                      }
                    }}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
