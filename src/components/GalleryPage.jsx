import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Maximize2 } from 'lucide-react';
import Logo from './Logo';
import './GalleryPage.css';

// Import visual assets for the gallery from the gallery directory
import cardamomFlowerImg from '../../gallery/cardamom flower.png';
import cloveBlackImg from '../../gallery/clove black.png';
import coffeeBeansHandImg from '../../gallery/coffee beans hand.png';
import coffeePlantImg from '../../gallery/coffee palnt.png';
import driedCardamomImg from '../../gallery/dried cardamom.png';
import driedCoffeebeansImg from '../../gallery/dried coffeebeans.png';
import nutmegFruitImg from '../../gallery/nutmeg fruit.png';
import pepperGreemImg from '../../gallery/pepper greem.png';
import turmericPowderImg from '../../gallery/turmeric powder.png';
import turmericImg from '../../gallery/turmeric.png';
import whatsappImg1 from '../../gallery/WhatsApp Image 2026-06-01 at 7.20.47 PM (1).jpeg';
import whatsappImg2 from '../../gallery/WhatsApp Image 2026-06-01 at 7.20.47 PM.jpeg';

const GalleryPage = ({ onBack }) => {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const galleryItems = [
    { id: 1, image: cardamomFlowerImg, title: "Cardamom Flower" },
    { id: 2, image: cloveBlackImg, title: "Black Cloves" },
    { id: 3, image: coffeeBeansHandImg, title: "Harvesting Coffee Beans" },
    { id: 4, image: coffeePlantImg, title: "Coffee Plant" },
    { id: 5, image: driedCardamomImg, title: "Dried Cardamom" },
    { id: 6, image: driedCoffeebeansImg, title: "Dried Coffee Beans" },
    { id: 7, image: nutmegFruitImg, title: "Nutmeg Fruit" },
    { id: 8, image: pepperGreemImg, title: "Green Pepper" },
    { id: 9, image: turmericPowderImg, title: "Turmeric Powder" },
    { id: 10, image: turmericImg, title: "Fresh Turmeric Roots" },
    { id: 11, image: whatsappImg1, title: "Premium Sourcing" },
    { id: 12, image: whatsappImg2, title: "Our Plantation" }
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
              {galleryItems.map((item, index) => (
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
