import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const certificationsList = [
  {
    id: 'fssai',
    tag: 'QUALITY',
    title: 'FSSAI Certified',
    desc: 'Ensures our products meet the rigorous safety, hygiene, and quality regulations set by the Food Safety and Standards Authority of India.',
    badgeColor: 'rgba(235, 137, 52, 0.06)',
    borderColor: 'rgba(235, 137, 52, 0.15)',
    icon: (
      <svg className="cert-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" />
        <path d="M38 32H62C64.2091 32 66 33.7909 66 36V64C66 66.2091 64.2091 68 62 68H38C35.7909 68 34 66.2091 34 64V36C34 33.7909 35.7909 32 38 32Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 42H58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M42 50H58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M42 58H50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
];

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header center">
          <span className="section-tag">ASSURED PURITY</span>

          <p className="section-description">
            Abrams is dedicated to ethical cultivation, ecological harmony, and uncompromising food safety at every stage.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 14,
                delay: index * 0.15
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.025,
                boxShadow: "0 20px 45px rgba(45, 27, 78, 0.12)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="cert-icon-wrapper">
                <motion.div 
                  className="cert-icon"
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {cert.icon}
                </motion.div>
              </div>
              <span className="cert-tag">{cert.tag}</span>
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
