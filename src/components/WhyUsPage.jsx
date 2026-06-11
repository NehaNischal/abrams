import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sprout, Ship, HandHeart, Wind, Package, Flame, ShieldCheck, Heart, Crown } from 'lucide-react';
import Logo from './Logo';
import './WhyUsPage.css';

const WhyUsPage = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const features = [
    { 
      icon: <Sprout size={36} />, 
      title: 'Farm Fresh', 
      desc: 'Directly sourced from organic farms at the peak of freshness, bypassing middlemen to ensure maximum quality control.',
      tag: 'ORIGIN'
    },
    { 
      icon: <Ship size={36} />, 
      title: 'Export Quality', 
      desc: 'Meeting the highest international food safety and sorting standards for premium global shipping across continents.',
      tag: 'BENCHMARK'
    },
    { 
      icon: <HandHeart size={36} />, 
      title: 'Sustainably Sourced', 
      desc: 'Supporting smallholder mountain farmers in Idukki, fostering biodiverse polyculture and fair wage trade practices.',
      tag: 'ETHICS'
    },
    { 
      icon: <Wind size={36} />, 
      title: 'Aromatic & Pure', 
      desc: 'Absolutely zero fillers, artificial colorings, or chemical additives. Just the pure, bold essence of natural spices.',
      tag: 'INTEGRITY'
    },
    { 
      icon: <Package size={36} />, 
      title: 'Premium Packaging', 
      desc: 'Hermetically sealed using multi-layered protective pouches to lock in volatile essential oils and rich farm aromas.',
      tag: 'PROTECTION'
    },
    { 
      icon: <Flame size={36} />, 
      title: 'Authentic Flavor', 
      desc: 'Traditional sun-drying and processing methods that preserve the natural piperine and eugenol contents of the spices.',
      tag: 'HERITAGE'
    }
  ];

  const pillars = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Unyielding Quality Control",
      description: "Every crop undergoes rigorous physical, sensory, and chemical purity assessments before being approved for packaging under the Abrams name."
    },
    {
      icon: <Heart size={28} />,
      title: "Community Preservation",
      description: "We work side-by-side with local farming families, investing back into sustainable agriculture practices, local schools, and forest protection."
    },
    {
      icon: <Crown size={28} />,
      title: "Artisanal Single-Origin",
      description: "Unlike commercial blended brands, our spices are strictly single-origin from high-elevation Idukki estates, ensuring unmatched flavor depth."
    }
  ];

  return (
    <div className="why-us-page">
      {/* Drifting Ambient Gold and Dark Purple Particles */}
      <div className="why-us-particles-wrapper">
        <div className="why-us-particle particle-a"></div>
        <div className="why-us-particle particle-b"></div>
        <div className="why-us-particle particle-c"></div>
      </div>


      {/* Hero Title Section */}
      <section className="why-us-hero">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="page-title"
          >
            The Abrams <span>Standard</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-subtitle-text"
          >
            Spices and coffee crafted with absolute purity. Sourced responsibly from the fertile soils and mist-shrouded high-altitude estates of Idukki, Kerala.
          </motion.p>
        </div>
      </section>

      {/* Interactive Core Advantages Grid */}
      <section className="why-us-grid-section">
        <div className="container">
          <div className="why-us-grid">
            {features.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 14,
                  delay: index * 0.1
                }}
                whileHover="hover"
                variants={{
                  hover: {
                    y: -12,
                    boxShadow: "0 25px 60px rgba(45, 27, 78, 0.15)"
                  }
                }}
                whileTap={{ scale: 0.98 }}
                className="why-us-card"
              >
                <div className="why-us-card-header">
                  <span className="why-us-card-tag">{item.tag}</span>
                  <motion.div 
                    className="why-us-icon-wrapper"
                    variants={{
                      hover: {
                        rotate: [0, -12, 10, -6, 4, 0],
                        scale: 1.12,
                        transition: { duration: 0.5 }
                      }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive Pillar Panel Section */}
      <section className="why-us-pillars-section">
        <div className="container">
          <div className="pillars-layout">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="pillars-text-content"
            >
              <span className="cursive-tag">Our Three Pillars</span>
              <h2 className="pillars-main-title">Crafting Everyday Luxury with Pure Integrity</h2>
              <p className="pillars-main-desc">
                We believe that a premium culinary experience should never come at the expense of our planet or farming communities. By integrating traditional wisdom with modern testing and protection protocols, we achieve a superior single-origin flavor that respects the land and is completely pure.
              </p>
              <div className="pillars-divider"></div>
            </motion.div>

            <div className="pillars-list">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="pillar-item"
                >
                  <div className="pillar-icon-box">
                    {pillar.icon}
                  </div>
                  <div className="pillar-info">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Call to Action */}
      <section className="why-us-cta-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-glass-panel"
          >
            <h2>Ready to Taste the Abrams Standard?</h2>
            <p>Connect with our sourcing experts for direct-from-origin commercial requests or custom blend enquiries.</p>
            <motion.a 
              href="https://wa.me/919400093627" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary cta-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Get in Touch via WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="why-us-footer">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Abrams Premium Spices & Coffee. Crafted with Purity, Cultivated with Integrity.</p>
        </div>
      </footer>
    </div>
  );
};

export default WhyUsPage;
