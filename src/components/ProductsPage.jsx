import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, X, MessageSquare, Shield, Droplet, Gem, MapPin, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import Logo from './Logo';
import './ProductsPage.css';

// Import product assets
import cardamomImg from '../assets/cardamom.jpeg';
import blackPepperImg from '../assets/black_pepper.jpeg';
import coffeeImg from '../assets/coffee.jpeg';
import cloveImg from '../assets/clove.jpeg';
import nutmegImg from '../assets/nutmeg.jpeg';
import gingerImg from '../assets/ginger_powder.jpeg';

const ProductsPage = ({ onBack }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('recommended');
  
  // Filter States
  const [filters, setFilters] = useState({
    category: []
  });

  // Accordion toggle states
  const [expandedFilters, setExpandedFilters] = useState({
    category: true
  });

  // Mobile filter drawer state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const productsList = [
    {
      id: 'cardamom',
      category: 'spices',
      title: 'Premium Cardamom',
      image: cardamomImg,
      subtitle: 'WESTERN GHATS ORIGIN',
      description: 'Our green cardamom pods are hand-selected at peak maturity for their vibrant green color and intense aromatic profile. Sourced exclusively from shaded, high-altitude estates.',
      flavorNotes: {
        aroma: 'Intensely sweet, floral & herbal',
        flavor: 'Warm, citrusy, with sweet eucalyptol undertones',
        strength: 'Highly Concentrated'
      },
      origin: {
        estate: 'Abrams Plantation',
        region: 'Western Ghats',
        elevation: '1,200m'
      },
      benefits: ['Promotes Digestion', 'Rich in Antioxidants', 'Natural Breath Freshener'],
      usage: 'Crush pods slightly to release seeds. Ideal for gourmet baking, premium chai, and infusing delicate cream desserts.',
      form: 'Whole Pods',
      aromaticProfile: 'Sweet & Floral'
    },
    {
      id: 'black-pepper',
      category: 'spices',
      title: 'Premium Black Pepper',
      image: blackPepperImg,
      subtitle: 'WESTERN GHATS ORIGIN',
      description: 'Plump, high-density peppercorns harvested from high-climbing vines. Slow sun-dried to lock in maximum piperine content and rich, woody essential oils.',
      flavorNotes: {
        aroma: 'Sharp, woody & deeply pungent',
        flavor: 'Bold, escalating heat with subtle cedar notes',
        strength: 'Sharp & Vibrant'
      },
      origin: {
        estate: 'Abrams Plantation',
        region: 'Western Ghats',
        elevation: '900m'
      },
      benefits: ['Enhances Nutrient Absorption', 'Supports Metabolism', 'Powerful Anti-inflammatory'],
      usage: 'Grind fresh over seared meats, savory soups, luxury broths, and artisanal cheese platters.',
      form: 'Whole Seeds',
      aromaticProfile: 'Warm & Pungent'
    },
    {
      id: 'clove',
      category: 'spices',
      title: 'Premium Clove',
      image: cloveImg,
      subtitle: 'WESTERN GHATS ORIGIN',
      description: 'Handpicked evergreen flower buds harvested just as they turn a crimson-pink. Sun-dried to preserve their high oil content and rich sweet-spicy scent.',
      flavorNotes: {
        aroma: 'Deeply sweet, spicy & medicinal',
        flavor: 'Warm, intensely numbing, sweet and pungent',
        strength: 'Extremely Pungent'
      },
      origin: {
        estate: 'Abrams Plantation',
        region: 'Western Ghats',
        elevation: '1,000m'
      },
      benefits: ['Supports Oral Health', 'High in Antioxidants', 'Soothes Respiratory Comfort'],
      usage: 'Use whole in rich curries, festive mulled wines, or grind sparingly into master spice blends.',
      form: 'Whole Buds',
      aromaticProfile: 'Warm & Pungent'
    },
    {
      id: 'nutmeg',
      category: 'spices',
      title: 'Premium Nutmeg',
      image: nutmegImg,
      subtitle: 'WESTERN GHATS ORIGIN',
      description: 'Whole nutmeg seeds kept in their natural protective shell. Grate fresh to release the highly volatile oils that give nutmeg its sweet, woody flavor.',
      flavorNotes: {
        aroma: 'Sweet, warm, woody & comforting',
        flavor: 'Sweet, nutty, with a mild spicy undertone',
        strength: 'Warm & Fragrant'
      },
      origin: {
        estate: 'Abrams Plantation',
        region: 'Western Ghats',
        elevation: '850m'
      },
      benefits: ['Improves Sleep Quality', 'Promotes Brain Health', 'Calms Muscle Tension'],
      usage: 'Grate fresh over creamy Béchamel sauces, eggnogs, spiced coffees, and warm holiday pastries.',
      form: 'Whole Seeds',
      aromaticProfile: 'Sweet & Floral'
    },
    {
      id: 'ginger',
      category: 'spices',
      title: 'Premium Ginger Powder',
      image: gingerImg,
      subtitle: 'WESTERN GHATS ORIGIN',
      description: 'Crafted from freshly harvested, plump ginger rhizomes that are sun-dried and stone-ground to preserve their full-spectrum essential oils, giving you a warm, fiery depth in every pinch.',
      flavorNotes: {
        aroma: 'Warm, zesty & peppery',
        flavor: 'Bold, spicy heat with a sweet citrus finish',
        strength: 'Fiery & Invigorating'
      },
      origin: {
        estate: 'Abrams Plantation',
        region: 'Western Ghats',
        elevation: '1,100m'
      },
      benefits: ['Aids Digestion & Gut Health', 'Powerful Anti-nausea', 'Supports Immune System'],
      usage: 'Whisk into golden milk, marinades, ginger tea, curries, and baked goods for a warming depth of flavour.',
      form: 'Ground/Powder',
      aromaticProfile: 'Fiery & Invigorating'
    },
    {
      id: 'coffee',
      category: 'coffee',
      title: 'Premium Coffee',
      image: coffeeImg,
      subtitle: 'WESTERN GHATS ORIGIN',
      description: 'Hand-selected single-origin coffee beans sourced from the mist-shrouded peaks of Idukki. Slow-roasted in small batches to preserve their complex notes and rich body.',
      flavorNotes: {
        aroma: 'Rich cocoa, hazelnut & floral',
        flavor: 'Bold, chocolatey, with a clean caramel finish',
        strength: 'Full-bodied'
      },
      origin: {
        estate: 'Abrams Plantation',
        region: 'Western Ghats',
        elevation: '1,400m'
      },
      benefits: ['Rich in Antioxidants', 'Boosts Energy & Focus', 'Supports Heart Health'],
      usage: 'Freshly grind beans and brew using French Press, Espresso, or Drip methods for an exceptional morning cup.',
      form: 'Whole Beans',
      aromaticProfile: 'Rich & Full-bodied'
    }
  ];

  // Helper toggle filters
  const handleFilterToggle = (category, value) => {
    setFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  // Check if any filter is active
  const isAnyFilterActive = Object.values(filters).some(arr => arr.length > 0);

  // Reset filters
  const handleClearFilters = () => {
    setFilters({
      category: []
    });
  };

  // Toggle filter accordion
  const toggleAccordion = (name) => {
    setExpandedFilters(prev => ({ ...prev, [name]: !prev[name] }));
  };

  // Filter products
  const filteredProducts = productsList.filter(product => {
    if (filters.category.length > 0 && !filters.category.includes(product.category)) return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name-asc') {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === 'name-desc') {
      return b.title.localeCompare(a.title);
    }
    return 0; // 'recommended' uses natural order
  });

  // Sidebar Filter List items
  const filterDefinitions = [
    {
      key: 'category',
      title: 'Category',
      options: [
        { label: 'Spices', value: 'spices' },
        { label: 'Coffee & Beverages', value: 'coffee' }
      ]
    }
  ];

  return (
    <div className="products-page">
      <AnimatePresence mode="wait">
        {!selectedProduct ? (
          <motion.div
            key="catalog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="catalog-view-wrapper"
          >
            {/* Hero Title Section */}
            <section className="products-hero">
              <div className="container text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="page-title"
                >
                  The Abrams <span>Masterpieces</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="page-subtitle-text"
                >
                  Sourced sustainably from the shaded, high-altitude estates of Western Ghats, Kerala.
                </motion.p>
              </div>
            </section>

            {/* Main Grid & Filters Content Section */}
            <div className="products-catalog-container">
              {/* Mobile Filter Toggle Bar */}
              <div className="mobile-filter-bar">
                <button className="mobile-filter-btn" onClick={() => setIsMobileFilterOpen(true)}>
                  <SlidersHorizontal size={16} />
                  <span>Filter & Sort</span>
                </button>
                <span className="products-count-mobile">{sortedProducts.length} Products</span>
              </div>

              {/* Top Control Bar (Desktop Only) */}
              <div className="catalog-control-bar">
                <div className="sort-selector-wrapper">
                  <span className="control-label">Sort By</span>
                  <div className="select-container">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                      <option value="recommended">Recommended</option>
                      <option value="name-asc">Alphabetical: A - Z</option>
                      <option value="name-desc">Alphabetical: Z - A</option>
                    </select>
                    <ChevronDown size={14} className="select-chevron" />
                  </div>
                </div>
                <span className="products-count">{sortedProducts.length} Products</span>
              </div>

              <div className="catalog-content-layout">
                {/* Left Filter Sidebar - Desktop */}
                <aside className="catalog-filter-sidebar">
                  <div className="sidebar-header">
                    <span className="filter-title">Filter</span>
                    {isAnyFilterActive && (
                      <button className="clear-filters-btn" onClick={handleClearFilters}>
                        Clear Filters
                      </button>
                    )}
                  </div>

                  <div className="filter-accordions">
                    {filterDefinitions.map(def => {
                      const isOpen = expandedFilters[def.key];
                      return (
                        <div key={def.key} className="filter-accordion-item">
                          <button className="accordion-trigger" onClick={() => toggleAccordion(def.key)}>
                            <span>{def.title}</span>
                            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>
                          
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="accordion-content-wrapper"
                              >
                                <ul className="filter-options-list">
                                  {def.options.map(option => {
                                    const isChecked = filters[def.key].includes(option.value);
                                    return (
                                      <li key={option.value}>
                                        <label className="filter-option-label">
                                          <input 
                                            type="checkbox" 
                                            checked={isChecked}
                                            onChange={() => handleFilterToggle(def.key, option.value)}
                                          />
                                          <span className="custom-checkbox"></span>
                                          <span className="option-text">{option.label}</span>
                                        </label>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </aside>

                {/* Right Product Grid */}
                <main className="catalog-products-main">
                  {sortedProducts.length === 0 ? (
                    <div className="no-products-message">
                      <h3>No products match your selection</h3>
                      <p>Try clearing some filters to explore our full selection.</p>
                      <button className="btn btn-secondary" onClick={handleClearFilters}>Clear Filters</button>
                    </div>
                  ) : (
                    <motion.div layout className="products-minimal-grid">
                      <AnimatePresence mode="popLayout">
                        {sortedProducts.map((product) => (
                          <motion.div
                            layout
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="product-minimal-card"
                            onClick={() => setSelectedProduct(product)}
                          >
                            <div className="card-image-box">
                              <img src={product.image} alt={product.title} className="card-product-img" />
                            </div>
                            <div className="card-info-box">
                              <h3 className="card-title">{product.title}</h3>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </main>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="product-detail"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="product-detail-page-wrapper"
          >
            <div className="product-detail-page-container">
              {/* Back navigation & logo header */}
              <div className="product-detail-page-header">
                <button className="product-detail-page-back-btn" onClick={() => setSelectedProduct(null)}>
                  <ArrowLeft size={16} />
                  <span>Back to Catalog</span>
                </button>
              </div>

              {/* Two-column Product Detail Layout */}
              <div className="product-detail-page-grid">
                {/* Left Column: Premium Image Viewer */}
                <div className="product-detail-page-image-sec">
                  <div className="product-detail-image-card">
                    <img src={selectedProduct.image} alt={selectedProduct.title} className="product-detail-img" />
                  </div>
                </div>

                {/* Right Column: Information Section */}
                <div className="product-detail-page-content-sec">
                  <h1 className="product-detail-page-title">{selectedProduct.title}</h1>

                  {/* Flavor Profile Panel */}
                  <div className="product-detail-page-panel">
                    <h4 className="product-detail-page-panel-title">
                      <span>Flavor Profile</span>
                    </h4>
                    <div className="product-detail-page-panel-grid">
                      <div className="product-detail-page-panel-item">
                        <span className="product-detail-page-panel-label">Aroma</span>
                        <span className="product-detail-page-panel-val">{selectedProduct.flavorNotes.aroma}</span>
                      </div>
                      <div className="product-detail-page-panel-item">
                        <span className="product-detail-page-panel-label">Flavor</span>
                        <span className="product-detail-page-panel-val">{selectedProduct.flavorNotes.flavor}</span>
                      </div>
                      <div className="product-detail-page-panel-item">
                        <span className="product-detail-page-panel-label">Strength</span>
                        <span className="product-detail-page-panel-val">{selectedProduct.flavorNotes.strength}</span>
                      </div>
                    </div>
                  </div>

                  {/* Terroir & Origin Panel */}
                  <div className="product-detail-page-panel">
                    <h4 className="product-detail-page-panel-title">
                      <span>Terroir & Origin</span>
                    </h4>
                    <div className="product-detail-page-panel-grid">
                      <div className="product-detail-page-panel-item">
                        <span className="product-detail-page-panel-label">Estate</span>
                        <span className="product-detail-page-panel-val">{selectedProduct.origin.estate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Health Benefits Section */}
                  <div className="product-detail-page-section">
                    <h4 className="product-detail-page-section-title">
                      <Shield size={16} />
                      <span>Health Benefits</span>
                    </h4>
                    <div className="product-detail-page-benefits-tags">
                      {selectedProduct.benefits.map((benefit, idx) => (
                        <span key={idx} className="product-detail-page-benefit-tag">{benefit}</span>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Usage Section */}
                  <div className="product-detail-page-section">
                    <h4 className="product-detail-page-section-title">
                      <Droplet size={16} />
                      <span>Recommended Usage</span>
                    </h4>
                    <p className="product-detail-page-usage-text">{selectedProduct.usage}</p>
                  </div>

                  {/* CTA Inquiry Link */}
                  <div className="product-detail-page-cta-wrapper">
                    <a 
                      href={`https://wa.me/919400093627?text=Hi%20Abrams,%20I%20am%20interested%20in%20inquiring%20about%20your%20${encodeURIComponent(selectedProduct.title)}.`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="product-detail-page-whatsapp-btn"
                    >
                      <MessageSquare size={18} />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Overview Section */}
                <div className="product-detail-page-overview">
                  <h3 className="product-detail-page-overview-heading">Overview</h3>
                  <p className="product-detail-page-overview-para">{selectedProduct.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-out Mobile Filters overlay drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="drawer-backdrop"
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="mobile-filter-drawer"
            >
              <div className="mobile-drawer-header">
                <span className="mobile-drawer-title">Filters</span>
                <button className="mobile-drawer-close" onClick={() => setIsMobileFilterOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-drawer-content">
                {/* Mobile Sort options */}
                <div className="mobile-sort-section">
                  <h4>Sort Products</h4>
                  <div className="mobile-sort-options">
                    <button 
                      className={`mobile-sort-opt ${sortBy === 'recommended' ? 'active' : ''}`}
                      onClick={() => setSortBy('recommended')}
                    >
                      Recommended
                    </button>
                    <button 
                      className={`mobile-sort-opt ${sortBy === 'name-asc' ? 'active' : ''}`}
                      onClick={() => setSortBy('name-asc')}
                    >
                      Alphabetical: A - Z
                    </button>
                    <button 
                      className={`mobile-sort-opt ${sortBy === 'name-desc' ? 'active' : ''}`}
                      onClick={() => setSortBy('name-desc')}
                    >
                      Alphabetical: Z - A
                    </button>
                  </div>
                </div>

                <div className="mobile-filters-section">
                  <h4>Filter By</h4>
                  {filterDefinitions.map(def => (
                    <div key={def.key} className="mobile-filter-group">
                      <h5>{def.title}</h5>
                      <ul className="mobile-filter-list">
                        {def.options.map(option => {
                          const isChecked = filters[def.key].includes(option.value);
                          return (
                            <li key={option.value}>
                              <label className="mobile-filter-option">
                                <input 
                                  type="checkbox" 
                                  checked={isChecked}
                                  onChange={() => handleFilterToggle(def.key, option.value)}
                                />
                                <span className="custom-checkbox"></span>
                                <span className="option-text">{option.label}</span>
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mobile-drawer-footer">
                {isAnyFilterActive && (
                  <button className="btn btn-secondary mobile-clear-btn" onClick={handleClearFilters}>
                    Clear All
                  </button>
                )}
                <button className="btn btn-primary mobile-apply-btn" onClick={() => setIsMobileFilterOpen(false)}>
                  Apply ({sortedProducts.length})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;
