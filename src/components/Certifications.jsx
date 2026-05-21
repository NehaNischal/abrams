import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const certificationsList = [
  {
    id: 'usda',
    tag: 'ORGANIC',
    title: 'USDA Organic',
    desc: 'Guarantees our spices and coffee are grown and processed without synthetic fertilizers, pesticides, or additives.',
    badgeColor: 'rgba(75, 83, 32, 0.06)',
    borderColor: 'rgba(75, 83, 32, 0.15)',
    icon: (
      <svg className="cert-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50 25C40 25 32 33 32 43C32 55 50 75 50 75C50 75 68 55 68 43C68 33 60 25 50 25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44 43C44 43 47 40 50 43C53 46 56 43 56 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="43" r="1.5" fill="currentColor" />
        <path d="M38 43H62" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
      </svg>
    )
  },
  {
    id: 'fairtrade',
    tag: 'ETHICAL',
    title: 'Fair Trade Certified',
    desc: 'Ensures equitable trading terms, sustainable livelihoods, and safe working environments for all our farming families.',
    badgeColor: 'rgba(93, 64, 55, 0.06)',
    borderColor: 'rgba(93, 64, 55, 0.15)',
    icon: (
      <svg className="cert-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" />
        <path d="M35 55C35 55 42 45 50 45C58 45 65 55 65 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="35" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M32 55H68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 45V68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M42 62H58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'haccp',
    tag: 'SAFETY',
    title: 'HACCP Quality Control',
    desc: 'Reflects a systematic, preventative approach to food safety and purity at every step of our distribution chain.',
    badgeColor: 'rgba(45, 27, 78, 0.05)',
    borderColor: 'rgba(45, 27, 78, 0.12)',
    icon: (
      <svg className="cert-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" />
        <path d="M34 38V48C34 58 50 68 50 68C50 68 66 58 66 48V38L50 32L34 38Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44 48.5L48 52.5L56 44.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'rainforest',
    tag: 'ECOLOGY',
    title: 'Rainforest Alliance',
    desc: 'Validates our active dedication to biodiversity, soil conservation, and preserving vital water resources in our estates.',
    badgeColor: 'rgba(75, 83, 32, 0.06)',
    borderColor: 'rgba(75, 83, 32, 0.15)',
    icon: (
      <svg className="cert-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 50C32 40 40 32 50 32C60 32 68 40 68 50C68 60 60 68 50 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 52C42 42 58 42 62 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M45 59C47 54 53 54 55 59" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="50" cy="46" r="2" fill="currentColor" />
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
          <h2 className="section-title">Certified Standards</h2>
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
