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
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#products">Collection</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="#products">Cardamom</a></li>
                <li><a href="#products">Coffee</a></li>
                <li><a href="#products">Spices</a></li>
                <li><a href="#products">Organics</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>Kerala, India</li>
                <li>+1 (234) 567-890</li>
                <li>hello@abrams.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ABRAMS PREMIUM. ALL RIGHTS RESERVED.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
