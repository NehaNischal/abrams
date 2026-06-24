import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const images = [
  '/src/assets/plantation_nutmeg.png',
  '/src/assets/plantation_ginger.png',
  '/src/assets/plantation_cardamom.jpg',
  '/src/assets/clove.png'
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">VISUALS</span>
          <h2 className="section-title">The Essence in Frames</h2>
        </div>

        <div className="masonry-grid">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 75,
                damping: 14,
                delay: index * 0.08
              }}
              whileHover="hover"
              className="masonry-item"
            >
              <motion.img 
                src={img} 
                alt={`Gallery ${index}`} 
                variants={{
                  hover: { scale: 1.06 }
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="item-overlay">
                <motion.span
                  variants={{
                    initial: { y: 15, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  initial="initial"
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                >
                  View Details
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
