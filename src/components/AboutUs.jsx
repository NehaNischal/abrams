import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Star, Flame, Sprout, ArrowLeft } from 'lucide-react';
import Logo from './Logo';
import './AboutUs.css';

import cardamomImg from '../assets/cardamom.png';
import blackPepperImg from '../assets/black_pepper.png';
import coffeeImg from '../assets/coffee.png';
import cloveImg from '../assets/clove.png';
import gingerImg from '../assets/ginger_powder.png';
import nutmegImg from '../assets/nutmeg.png';
import aboutUsImg from '../assets/about_us.png';

const AboutUs = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const philosophies = [
    {
      icon: <Leaf size={44} strokeWidth={1.5} />,
      title: "100% Natural",
      desc: "Pure products with no unnecessary additives."
    },
    {
      icon: <Star size={44} strokeWidth={1.5} />,
      title: "Handpicked Quality",
      desc: "Carefully selected for maximum freshness and flavor."
    },
    {
      icon: <Flame size={44} strokeWidth={1.5} />,
      title: "Rich Aroma & Authentic Taste",
      desc: "Premium produce known for its bold character and depth."
    },
    {
      icon: <Sprout size={44} strokeWidth={1.5} />,
      title: "Sustainable Sourcing",
      desc: "Supporting responsible farming and long-term partnerships."
    }
  ];

  return (
    <section className="about-us-page standalone" id="story">
      {/* Drifting Ambient Gold and Dark Purple Particles */}
      <div className="about-us-particle particle-x"></div>
      <div className="about-us-particle particle-y"></div>

      {/* Top Header Navigation */}
      <header className="about-us-header-nav">
        <div className="container header-inner">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="back-btn"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </motion.button>
          
          <div className="nav-logo" style={{ cursor: 'pointer' }} onClick={onBack}>
            <Logo className="nav-logo-svg" style={{ '--logo-height': '140px' }} />
          </div>
        </div>
      </header>

      <div className="container about-us-body-container">
        
        {/* Header Section */}
        <div className="about-header">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-header-content"
          >
            <span className="cursive-tag">About Us</span>
            <h2 className="about-main-title">Handpicked Excellence,<br/>Crafted by Nature</h2>
            <div className="about-desc">
              <p>
                For more than 40 years, our family has been dedicated to spice cultivation in the beautiful Western Ghats of Idukki, Kerala. What began with our great-grandfather’s passion for farming has now grown into a tradition that continues across generations with the same care and commitment.
              </p>
              <p>
                We cultivate a wide variety of premium spices including cardamom, pepper, clove, nutmeg, ginger, and more. Our farms are located in the rich and fertile hills of Idukki, a region well known for producing some of the finest spices in India.
              </p>
              <p>
                Over the years, we have focused on maintaining quality, purity, and freshness in every spice we grow. By combining traditional farming knowledge with careful cultivation practices, we ensure that our products retain their natural aroma, flavour, and authenticity.
              </p>
              <p>
                Farming is not just our business — it is our heritage and passion. We take pride in delivering high-quality spices directly from our plantations to customers who value natural and genuine products.
              </p>
            </div>
          </motion.div>
          <div className="about-header-image">
            <a href={aboutUsImg} target="_blank" rel="noopener noreferrer" className="about-img-link">
              <img src={aboutUsImg} alt="About Abrams" className="about-main-img" />
            </a>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="philosophy-section">
          <div className="philosophy-title-wrapper">
            <h3 className="section-subtitle">Our Philosophy</h3>
            <div className="divider-line"></div>
          </div>
          <div className="philosophy-grid">
            {philosophies.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: index * 0.1
                }}
                className="philosophy-card"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 9,
                    delay: index * 0.15 + 0.2
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    rotate: [0, -8, 6, -4, 2, 0],
                    y: -6
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="icon-circle"
                >
                  {item.icon}
                </motion.div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Everyday Luxury Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="everyday-luxury"
        >
          <div className="luxury-text">
            <h3>Everyday Luxury</h3>
            <p>Experience the premium selection of our finest single-origin harvests, designed to elevate your everyday culinary moments.</p>
          </div>
          <div className="luxury-icons">
            <div className="luxury-icon-box">
              <div className="luxury-img-wrapper">
                <img src={cardamomImg} alt="Cardamom" />
              </div>
              <span>Cardamom</span>
            </div>
            <div className="luxury-icon-box">
              <div className="luxury-img-wrapper">
                <img src={blackPepperImg} alt="Black Pepper" />
              </div>
              <span>Pepper</span>
            </div>
            <div className="luxury-icon-box">
              <div className="luxury-img-wrapper">
                <img src={coffeeImg} alt="Coffee" />
              </div>
              <span>Coffee</span>
            </div>
            <div className="luxury-icon-box">
              <div className="luxury-img-wrapper">
                <img src={cloveImg} alt="Clove" />
              </div>
              <span>Clove</span>
            </div>
            <div className="luxury-icon-box">
              <div className="luxury-img-wrapper">
                <img src={gingerImg} alt="Ginger" />
              </div>
              <span>Ginger</span>
            </div>
            <div className="luxury-icon-box">
              <div className="luxury-img-wrapper">
                <img src={nutmegImg} alt="Nutmeg" />
              </div>
              <span>Nutmeg</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Premium Footer */}
      <footer className="about-us-footer">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Abrams Premium Spices & Coffee. Crafted with Purity, Cultivated with Integrity.</p>
        </div>
      </footer>
    </section>
  );
};

export default AboutUs;
