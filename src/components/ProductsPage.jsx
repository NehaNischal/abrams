import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, MessageSquare, Shield, Droplet, Gem, MapPin } from 'lucide-react';
import Logo from './Logo';
import './ProductsPage.css';

// Import product assets (using your saved JPEG files!)
import cardamomImg from '../assets/cardamom.jpeg';
import blackPepperImg from '../assets/black_pepper.jpeg';
import coffeeImg from '../assets/coffee.jpeg';
import cloveImg from '../assets/clove.jpeg';
import nutmegImg from '../assets/nutmeg.jpeg';
import gingerImg from '../assets/ginger_powder.jpeg';

// Separate component for each product card to obey React's rules of hooks
const ProductCard = ({ product, index, cardVariants, itemVariants }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  // Scale the product package image from 0.85 to 1.05 as it scrolls into view
  const scale = useScrollLinkedScale(scrollYProgress);
  // Also add a subtle translation y coordinate to create a parallax float effect
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.div 
      ref={cardRef}
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className={`product-detail-card ${index % 2 === 0 ? 'card-even' : 'card-odd'}`}
    >
      {/* Product Poster with Gold Radial Glow backer frame */}
      <div className="product-visual-wrapper">
        <div className="luxury-backdrop-glow"></div>
        <div className="luxury-frame-border"></div>
        <motion.img 
          src={product.image} 
          alt={product.title} 
          className="product-visual"
          style={{ scale, y }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <span className="product-category-tag">{product.category}</span>
      </div>

      {/* Comprehensive Details - Cascading Children */}
      <div className="product-detail-content">
        <motion.div variants={itemVariants} className="product-brand-group">
          <span className="product-details-subtitle">{product.subtitle}</span>
          <h2 className="product-details-title">{product.title}</h2>
        </motion.div>

        <motion.p variants={itemVariants} className="product-details-desc">{product.description}</motion.p>

        {/* Flavor Notes Panel */}
        <motion.div variants={itemVariants} className="details-panel tasting-panel">
          <h4 className="panel-title">
            <Gem size={16} className="panel-icon" /> 
            <span>Tasting & Aromatic Profile</span>
          </h4>
          <div className="panel-grid">
            <div className="panel-item tasting-item">
              <span className="panel-label">Aroma</span>
              <span className="panel-val">{product.flavorNotes.aroma}</span>
            </div>
            <div className="panel-item tasting-item">
              <span className="panel-label">Flavor</span>
              <span className="panel-val">{product.flavorNotes.flavor}</span>
            </div>
            <div className="panel-item tasting-item">
              <span className="panel-label">Strength</span>
              <span className="panel-val">{product.flavorNotes.strength}</span>
            </div>
          </div>
        </motion.div>

        {/* Origin Details */}
        <motion.div variants={itemVariants} className="details-panel origin-panel">
          <h4 className="panel-title">
            <MapPin size={16} className="panel-icon" /> 
            <span>Terroir & Origin</span>
          </h4>
          <div className="panel-grid">
            <div className="panel-item origin-item">
              <span className="panel-label">Estate</span>
              <span className="panel-val">{product.origin.estate}</span>
            </div>
            <div className="panel-item origin-item">
              <span className="panel-label">Region</span>
              <span className="panel-val">{product.origin.region}</span>
            </div>
            {product.origin.elevation && (
              <div className="panel-item origin-item">
                <span className="panel-label">Elevation</span>
                <span className="panel-val">{product.origin.elevation}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div variants={itemVariants} className="benefits-group">
          <h4 className="benefits-title">
            <Shield size={16} className="panel-icon" /> 
            <span>Health Benefits</span>
          </h4>
          <div className="benefits-tags">
            {product.benefits.map((b, i) => (
              <motion.span 
                key={i} 
                className="benefit-tag"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Usage */}
        <motion.div variants={itemVariants} className="usage-panel">
          <h4 className="usage-title">
            <Droplet size={16} className="panel-icon" /> 
            <span>Recommended Culinary Usage</span>
          </h4>
          <p className="usage-text">{product.usage}</p>
        </motion.div>

        {/* Direct Inquiry Action */}
        <motion.div variants={itemVariants} className="product-inquire-section">
          <motion.a 
            href="https://wa.me/919400093627" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary inquire-btn luxury-shimmer-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageSquare size={16} />
            <span>Inquire about {product.title}</span>
            <span className="shimmer-sweep"></span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Custom helper hook to avoid calling hooks inside map loops
const useScrollLinkedScale = (scrollYProgress) => {
  return useTransform(scrollYProgress, [0, 1], [0.85, 1.05]);
};

const ProductsPage = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const productsList = [
    {
      id: 'cardamom',
      category: 'spices',
      title: 'Premium Cardamom',
      image: cardamomImg,
      subtitle: 'The Queen of Spices',
      description: 'Our green cardamom pods are hand-selected at peak maturity for their vibrant color and intense aromatic profile. Sourced exclusively from shaded, high-altitude estates.',
      flavorNotes: {
        aroma: 'Intensely sweet, floral & herbal',
        flavor: 'Warm, citrusy, with sweet eucalyptol undertones',
        strength: 'Highly Concentrated'
      },
      origin: {
        estate: 'Mist-covered Peaks of Idukki, Kerala',
        region: 'Cardamom Hills, Idukki'
      },
      benefits: ['Promotes Digestion', 'Rich in Antioxidants', 'Natural Breath Freshener'],
      usage: 'Crush pods slightly to release seeds. Ideal for gourmet baking, premium chai, and infusing delicate cream desserts.'
    },
    {
      id: 'black-pepper',
      category: 'spices',
      title: 'Premium Black Pepper',
      image: blackPepperImg,
      subtitle: 'The Black Gold of Idukki',
      description: 'Plump, high-density peppercorns harvested from high-climbing vines. Slow sun-dried to lock in maximum piperine content and rich, woody essential oils.',
      flavorNotes: {
        aroma: 'Sharp, woody & deeply pungent',
        flavor: 'Bold, escalating heat with subtle cedar notes',
        strength: 'Sharp & Vibrant'
      },
      origin: {
        estate: 'Bio-diverse Black Pepper Hills, Idukki',
        region: 'Black Pepper Hills, Idukki'
      },
      benefits: ['Enhances Nutrient Absorption', 'Supports Metabolism', 'Powerful Anti-inflammatory'],
      usage: 'Grind fresh over seared meats, savory soups, luxury broths, and artisanal cheese platters.'
    },
    {
      id: 'clove',
      category: 'spices',
      title: 'Premium Clove',
      image: cloveImg,
      subtitle: 'Evergreen Flower Buds',
      description: 'Handpicked evergreen flower buds harvested just as they turn a crimson-pink. Sun-dried to preserve their high oil content and rich sweet-spicy scent.',
      flavorNotes: {
        aroma: 'Deeply sweet, spicy & medicinal',
        flavor: 'Warm, intensely numbing, sweet and pungent',
        strength: 'Extremely Pungent'
      },
      origin: {
        estate: 'Sunlit Mountain Hillsides, Idukki',
        region: 'Clove Hills, Idukki'
      },
      benefits: ['Supports Oral Health', 'High in Antioxidants', 'Soothes Respiratory Comfort'],
      usage: 'Use whole in rich curries, festive mulled wines, or grind sparingly into master spice blends.'
    },
    {
      id: 'nutmeg',
      category: 'spices',
      title: 'Premium Nutmeg',
      image: nutmegImg,
      subtitle: 'Whole Apricot Seed',
      description: 'Whole nutmeg seeds kept in their natural protective shell. Grate fresh to release the highly volatile oils that give nutmeg its sweet, woody flavor.',
      flavorNotes: {
        aroma: 'Sweet, warm, woody & comforting',
        flavor: 'Sweet, nutty, with a mild spicy undertone',
        strength: 'Warm & Fragrant'
      },
      origin: {
        estate: 'Humid Alluvial Valleys, Idukki',
        region: 'Nutmeg Hills, Idukki'
      },
      benefits: ['Improves Sleep Quality', 'Promotes Brain Health', 'Calms Muscle Tension'],
      usage: 'Grate fresh over creamy Béchamel sauces, eggnogs, spiced coffees, and warm holiday pastries.'
    },
    {
      id: 'ginger',
      category: 'spices',
      title: 'Premium Ginger Powder',
      image: gingerImg,
      subtitle: 'Sun-Dried & Stone Ground',
      description: 'Crafted from freshly harvested, plump ginger rhizomes that are sun-dried and stone-ground to preserve their full-spectrum essential oils, giving you a warm, fiery depth in every pinch.',
      flavorNotes: {
        aroma: 'Warm, zesty & peppery',
        flavor: 'Bold, spicy heat with a sweet citrus finish',
        strength: 'Fiery & Invigorating'
      },
      origin: {
        estate: 'Ginger Hills, Idukki',
        region: 'Ginger Hills, Idukki'
      },
      benefits: ['Aids Digestion & Gut Health', 'Powerful Anti-nausea', 'Supports Immune System'],
      usage: 'Whisk into golden milk, marinades, ginger tea, curries, and baked goods for a warming depth of flavour.'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? productsList 
    : productsList.filter(p => p.category === selectedCategory);

  // Luxury Organic Spring Entrance Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.82, y: 100, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 14,
        staggerChildren: 0.12,
        delayChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="products-page">
      {/* Drifting Ambient Purple & Gold Particles (Wrapped in clipping container to prevent page height overflow) */}
      <div className="ambient-particles-wrapper">
        <div className="ambient-particle particle-1"></div>
        <div className="ambient-particle particle-2"></div>
        <div className="ambient-particle particle-3"></div>
        <div className="ambient-particle particle-4"></div>
      </div>

      {/* Hero Title Section */}
      <section className="products-hero">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="page-title"
          >
            The Abrams <span>Masterpieces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-subtitle-text"
          >
            Explore nature's finest treasures. Sourced sustainably from the fertile valleys and mist-shrouded peaks of Idukki, Kerala.
          </motion.p>
        </div>
      </section>

      {/* Grid of Detailed Products */}
      <section className="products-grid-section">
        <div className="container">
          <motion.div layout className="products-detail-grid">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  index={index}
                  cardVariants={cardVariants}
                  itemVariants={itemVariants}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
