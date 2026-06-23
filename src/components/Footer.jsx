import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <div className="nav-logo">
              <Logo className="nav-logo-svg" />
            </div>
            <p className="footer-bio">
              Premium handcrafted spices and coffee bringing nature's essence 
              to your home. Sustainable, organic, and world-class.
            </p>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/_abraams" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/company/abramsgroup/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  Mavady PO, Nedumkandam <br />
                  Idukki Kerala
                </li>
                <li><a href="tel:+919400093627" style={{ textDecoration: 'none', color: 'inherit' }}>+91 94000 93627, 7907707990</a></li>
                <li><a href="mailto:abramsgroup.co@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>abramsgroup.co@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container" style={{ textAlign: 'center' }}>
          <p>© {new Date().getFullYear()} Abrams Premium Spices & Coffee. Crafted with Purity, Cultivated with Integrity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
