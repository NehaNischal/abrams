import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Star, Flame, Sprout } from 'lucide-react';
import './AboutUs.css';

import cardamomImg from '../assets/cardamom.png';
import blackPepperImg from '../assets/black_pepper.png';
import coffeeImg from '../assets/coffee.png';
import cloveImg from '../assets/clove.png';
import gingerImg from '../assets/ginger.png';
import nutmegImg from '../assets/nutmeg.png';
import aboutUsImg from '../assets/about_us.png';


const AboutUs = () => {
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
    <section className="about-us-page" id="story">
      <div className="container">
        
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



      </div>
    </section>
  );
};

export default AboutUs;
