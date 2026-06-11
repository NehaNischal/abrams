import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Compass, Sun, Wind, X } from 'lucide-react';
import coffeeImg from '../assets/plantation_coffee.png';
import cardamomImg from '../assets/plantation_cardamom.png';
import pepperImg from '../assets/plantation_pepper.png';
import clovesImg from '../assets/plantation_cloves.png';
import nutmegImg from '../assets/plantation_nutmeg.png';
import Logo from './Logo';
import './PlantationPage.css';

const PlantationPage = ({ onBack }) => {
  const [activeImage, setActiveImage] = useState(null);

  const estates = [
    {
      id: 1,
      image: cardamomImg,
      title: "Highland Cardamom Shaded Gardens",
      location: "Mist-covered Peaks of Idukki, Kerala",
      elevation: "1,600m - 1,800m",
      soil: "Humus-rich forest loam",
      sunlight: "Dappled light under canopy trees",
      description: "Deep in the cloudy high-altitude peaks of Idukki, our cardamom plants are sheltered under massive indigenous shade trees. The cool climate, morning mist, and heavy organic forest mulch allow the pods to develop their intense green color, bold size, and highly concentrated essential oils."
    },
    {
      id: 3,
      image: pepperImg,
      title: "High-Climbing Black Pepper Vines",
      location: "Bio-diverse Black Pepper Hills, Idukki",
      elevation: "800m - 1,100m",
      soil: "Well-drained red laterite soil",
      sunlight: "Bright tropical sun & ambient humidity",
      description: "Our black pepper vines are planted alongside tall silver oak and coconut trees, climbing up to twenty feet. The natural support systems and optimal high humidity foster the growth of plump pepper strings, harvested by hand to ensure hot, bold, and fully mature corns."
    },
    {
      id: 4,
      image: clovesImg,
      title: "Evergreen Clove Tree Orchards",
      location: "Sunlit Mountain Hillsides, Idukki",
      elevation: "900m - 1,200m",
      soil: "Deep sandy clay loam",
      sunlight: "Open sun & sea-facing wind currents",
      description: "Our cloves are harvested from mature, evergreen clove trees. The hilly slope breezes and long sunlit hours in Idukki allow the flower buds to turn a beautiful crimson-pink, indicating they are ready for careful handpicking and sun-drying to lock in sweet eugenol content."
    },
    {
      id: 5,
      image: nutmegImg,
      title: "Centuries-Old Nutmeg Groves",
      location: "Humid Alluvial Valleys, Idukki",
      elevation: "600m - 800m",
      soil: "Rich alluvial organic compost",
      sunlight: "Warm partial shade under canopy",
      description: "Our nutmeg groves are situated in humid valleys where the trees thrive in high rainfall. The apricot-like golden fruits ripen until they split open naturally, revealing the brilliant red lacy mace (aril) wrapped around the hard nutmeg shell—yielding two exquisite spices from a single tree."
    }
  ];

  return (
    <div className="plantation-page">

      {/* Main Hero Header */}
      <section className="plantation-hero">
        <div className="container text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="cursive-tag"
          >
            Sourced at the Origin
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="plantation-title"
          >
            Our Sustainable <span>Plantations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="plantation-intro"
          >
            Journey with us to the misty highlands and vibrant tropical valleys where the pure flavor 
            of Abrams is born. Every bean, leaf, and seed is cultivated in perfect harmony with nature.
          </motion.p>
        </div>
      </section>

      {/* Estates Showcases */}
      <section className="estates-section">
        <div className="container">
          <div className="estates-list">
            {estates.map((estate, index) => (
              <motion.div 
                key={estate.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className={`estate-card ${index % 2 === 1 ? 'reverse' : ''}`}
              >
                {/* Image Section - overlay button completely removed */}
                <div className="estate-image-wrapper">
                  <motion.div 
                    className="estate-image-box"
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setActiveImage(estate)}
                  >
                    <img src={estate.image} alt={estate.title} className="estate-image" />
                  </motion.div>
                </div>

                {/* Content Details */}
                <div className="estate-content">
                  <h2 className="estate-title">{estate.title}</h2>
                  
                  <div className="estate-metadata">
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{estate.location}</span>
                    </div>
                    <div className="meta-item">
                      <Compass size={16} />
                      <span>{estate.elevation}</span>
                    </div>
                  </div>

                  <p className="estate-desc">{estate.description}</p>

                  <div className="estate-ecology">
                    <div className="ecology-tag">
                      <Wind size={14} />
                      <span>{estate.soil}</span>
                    </div>
                    <div className="ecology-tag">
                      <Sun size={14} />
                      <span>{estate.sunlight}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="plantation-footer">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Abrams Spices & Coffee. Crafted by Nature, Sourced Responsibly.</p>
        </div>
      </footer>

      {/* Lightbox / Full-screen View Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div 
              className="lightbox-container"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setActiveImage(null)}>
                <X size={24} />
              </button>
              <img src={activeImage.image} alt={activeImage.title} className="lightbox-img" />
              <div className="lightbox-caption">
                <h3>{activeImage.title}</h3>
                <p>{activeImage.location} • {activeImage.elevation}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlantationPage;
