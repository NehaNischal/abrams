import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Maximize2 } from 'lucide-react';
import Logo from './Logo';
import './GalleryPage.css';

// Import all visual assets for absolute robustness in Vite bundle
import cardamomImg from '../assets/cardamom.png';
import blackPepperImg from '../assets/black_pepper.png';
import coffeeImg from '../assets/coffee.png';
import cloveImg from '../assets/clove.png';
import nutmegImg from '../assets/nutmeg.png';
import gingerImg from '../assets/ginger_powder.png';
import aboutUsImg from '../assets/about_us.png';
import platCoffeeImg from '../assets/plantation_coffee.png';
import platCardamomImg from '../assets/plantation_cardamom.png';
import platPepperImg from '../assets/plantation_pepper.png';
import platClovesImg from '../assets/plantation_cloves.png';
import platNutmegImg from '../assets/plantation_nutmeg.png';
import galleryImg1 from '../assets/gallery.jpeg';
import galleryImg3 from '../assets/new.jpeg';

const GalleryPage = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const galleryItems = [
    { id: 3, image: galleryImg1, title: "Abrams Spice Box", category: "curated" },
    { id: 5, image: galleryImg3, title: "Curated Box", category: "curated" }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Frames' },
    { id: 'spices', label: 'Artisanal Spices' },
    { id: 'estates', label: 'Our Estates' },
    { id: 'curated', label: 'Curated Sets' }
  ];

  return (
    <div className="gallery-page">
      {/* Drifting Ambient Purple & Gold Particles */}
      <div className="gallery-particles-wrapper">
        <div className="gallery-particle particle-1"></div>
        <div className="gallery-particle particle-2"></div>
        <div className="gallery-particle particle-3"></div>
      </div>


      {/* Main Hero Header */}
      <section className="gallery-hero">
        <div className="container text-center">

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="page-title"
          >
            The Abrams <span>Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-subtitle-text"
          >
            Browse through the breathtaking views of our high-altitude spice estates, slow harvesting steps, and artisanal single-origin masterpieces.
          </motion.p>
        </div>
      </section>



      {/* Premium Masonry Grid Layout */}
      <section className="gallery-grid-section">
        <div className="container">
          <motion.div layout className="gallery-masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    delay: (index % 6) * 0.06
                  }}
                  className={`gallery-masonry-item item-${index % 5}`}
                  whileHover="hover"
                  onClick={() => setLightboxImage(item)}
                >
                  <img src={item.image} alt={item.title} className="gallery-img" />
                  <div className="gallery-overlay">
                    <motion.div 
                      className="overlay-content"
                      variants={{
                        initial: { y: 20, opacity: 0 },
                        hover: { y: 0, opacity: 1 }
                      }}
                      initial="initial"
                      transition={{ type: "spring", stiffness: 100, damping: 14 }}
                    >
                      <Maximize2 size={24} className="zoom-icon" />
                      <h3>{item.title}</h3>
                      <span>{item.category.toUpperCase()}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox / Full-screen View Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            className="gallery-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div 
              className="lightbox-wrapper"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close-btn" onClick={() => setLightboxImage(null)}>
                <X size={26} />
              </button>
              <img src={lightboxImage.image} alt={lightboxImage.title} className="lightbox-image" />
              <div className="lightbox-footer-caption">
                <h3>{lightboxImage.title}</h3>
                <span className="caption-tag">{lightboxImage.category.toUpperCase()}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Footer */}
      <footer className="gallery-footer">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Abrams Premium Spices & Coffee. Sourced in Purity, Crafted with Passion.</p>
        </div>
      </footer>
    </div>
  );
};

export default GalleryPage;
