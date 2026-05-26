import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import spicesBg from '../assets/spices_bg.png';
import dairyBg from '../assets/dairy_bg.jpg';
import dairyCardBg from '../assets/dairy_card_bg.png';
import './About.css';

const Categories = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="categories-section" id="collection">
      <div className="container">
        <div className="categories-grid">
          {/* Spices Card */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="category-card large"
            style={{ backgroundImage: `url(${spicesBg})` }}
          >
            <div className="category-overlay">
              <span className="cat-subtitle">THE COLLECTION</span>
              <h2 className="cat-title">Premium Spices</h2>
              <p className="cat-desc">Handpicked from the finest plantations across the world.</p>
              <button
                className="btn btn-outline-white"
                style={{ background: 'transparent', cursor: 'pointer' }}
                onClick={(e) => { e.stopPropagation(); if (onNavigate) onNavigate('products-page'); }}
              >
                Explore Collection
              </button>
            </div>
          </motion.div>
 
          {/* Dairy Card */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="category-card large"
            style={{ backgroundImage: `url(${dairyCardBg})`, cursor: 'pointer' }}
            onClick={() => setIsModalOpen(true)}
          >
            <div className="category-overlay">
              <span className="cat-subtitle">THE COLLECTION</span>
              <h2 className="cat-title">Premium Dairy</h2>
              <p className="cat-desc">Pure, fresh, and wholesome organic dairy products crafted with care.</p>
              <button 
                className="btn btn-outline-white" 
                style={{ background: 'transparent', cursor: 'pointer' }}
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setIsModalOpen(true); 
                }}
              >
                Explore Dairy
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium Coming Soon Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="dairy-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className="dairy-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="dairy-modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
                <X size={24} />
              </button>
              <img src={dairyBg} alt="Something Delicious is on the way! Coming Soon" className="dairy-modal-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Categories;
