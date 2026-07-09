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

const getProductSpecs = (product) => {
  if (!product) return [];

  let tier = 'Premium';
  let harvest = 'Hand-picked at Peak Maturity';
  let packaging = '250g • 500g • 1kg • 10kg';
  let shelfLife = '12 Months';

  if (product.id === 'cardamom') {
    tier = 'Premium (Bold Green)';
  } else if (product.id === 'black-pepper') {
    tier = 'Premium Bold Grade';
    harvest = 'Vine-ripened, Naturally Sun-dried';
    packaging = '250g • 500g • 1kg';
  } else if (product.id === 'clove') {
    tier = 'Premium Whole Cloves';
    harvest = 'Hand-picked Flower Buds, Peak Maturity';
    packaging = '250g • 500g • 1kg';
  } else if (product.id === 'nutmeg') {
    tier = 'Premium Whole Grade';
    harvest = 'Fully Mature, Hand-picked & Naturally Dried';
    packaging = '250g • 500g • 1kg';
  } else if (product.id === 'ginger') {
    tier = 'Premium Fine Ground';
    harvest = 'Mature Rhizomes, Naturally Dried & Finely Milled';
    packaging = '250g • 500g • 1kg';
  } else if (product.id === 'coffee') {
    tier = 'Specialty Estate Grade';
    harvest = 'Selectively Hand-picked, Peak Ripeness';
    packaging = '250g • 500g • 1kg';
  }

  return [
    { key: 'FRAGRANCE', val: product.flavorNotes?.aroma || 'Aromatic' },
    { key: 'PALATE', val: product.flavorNotes?.flavor || 'Rich flavour' },
    { key: 'INTENSITY', val: product.flavorNotes?.strength || 'Highly Concentrated' },
    { key: 'TIER', val: tier },
    { key: 'HARVEST', val: harvest },
    { key: 'PACKAGING', val: packaging },
    { key: 'SHELF LIFE', val: shelfLife }
  ];
};

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
      description: 'Known as the “Queen of Spices,” Green Cardamom is one of the world’s most prized aromatic spices, celebrated for its vibrant colour, distinctive fragrance, and exceptional flavour. Cultivated in the mist-covered hills of the Western Ghats, our premium cardamom is grown under ideal climatic conditions that enhance its essential oil content and natural sweetness. Each pod is carefully hand-picked at peak maturity, ensuring superior quality, freshness, and consistency. Widely used in premium culinary applications, beverages, confectionery, pharmaceuticals, and wellness products, Abrams Plantation Green Cardamom represents the finest expression of Kerala’s spice heritage.',
      flavorNotes: {
        aroma: 'Intensely sweet, floral & herbal',
        flavor: 'Warm, citrusy, sweet eucalyptol undertones',
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
      description: 'Often referred to as the “King of Spices,” Black Pepper from the Western Ghats has earned global recognition for its bold flavour, rich aroma, and naturally high piperine content. Our pepper vines thrive in fertile plantation soils and are harvested only when the berries reach optimum maturity. The peppercorns are naturally sun-dried, cleaned, and graded to preserve their robust character, delivering a premium ingredient trusted by food manufacturers, gourmet chefs, and international spice traders worldwide.',
      flavorNotes: {
        aroma: 'Bold, woody, earthy & spicy',
        flavor: 'Sharp heat, citrus & woody finish',
        strength: 'High Piperine Content'
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
      description: 'Harvested from the unopened flower buds of carefully cultivated clove trees, Abrams Plantation Cloves are renowned for their intense aroma, high essential oil content, and exceptional quality. Grown in the cool, humid climate of the Western Ghats, every bud is hand-picked at the ideal stage of maturity and naturally dried to preserve its rich flavour profile. Our cloves are widely used in premium culinary products, essential oils, pharmaceuticals, and wellness applications.',
      flavorNotes: {
        aroma: 'Warm, sweet & intensely aromatic',
        flavor: 'Rich spice, lingering sweetness',
        strength: 'High Essential Oil Content'
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
      description: 'Nutmeg is one of the world’s most treasured aromatic spices, appreciated for its warm sweetness, rich essential oils, and remarkable versatility. Grown within the fertile landscapes of the Western Ghats, Abrams Plantation Nutmeg is harvested only after full maturity to ensure optimum flavour and oil concentration. Carefully processed and naturally dried, our premium nutmeg is suitable for gourmet cuisine, baking, beverages, pharmaceuticals, cosmetics, and premium spice blends.',
      flavorNotes: {
        aroma: 'Sweet, warm & woody',
        flavor: 'Rich, mildly sweet, earthy spice',
        strength: 'High Essential Oil Content'
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
      description: 'Our Ginger Powder is produced from carefully selected mature ginger rhizomes cultivated in the nutrient-rich soils of the Western Ghats. After harvesting, the ginger is naturally dried and finely milled to preserve its authentic flavour, aroma, and active compounds. The result is a premium-quality powder with remarkable freshness and pungency, suitable for food processing, baking, beverages, nutraceuticals, and pharmaceutical applications.',
      flavorNotes: {
        aroma: 'Fresh, warm & spicy',
        flavor: 'Pungent with earthy sweetness',
        strength: 'Rich Natural Gingerols'
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
      description: 'Nestled within the biodiverse Western Ghats, Abrams Plantation cultivates premium coffee under a natural canopy of native shade trees, allowing the cherries to mature slowly and develop exceptional flavour complexity. Carefully hand-harvested and processed, our estate-grown coffee delivers a refined balance of sweetness, acidity, and body, making it ideal for specialty roasters, cafés, and gourmet retailers. Every bean reflects the rich volcanic soils and pristine mountain climate that define one of India’s most celebrated coffee-growing regions.',
      flavorNotes: {
        aroma: 'Chocolate, caramel, floral & nutty',
        flavor: 'Smooth body, balanced acidity, lingering sweetness',
        strength: 'Medium to Full Body'
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

                  {/* Product Specifications Table */}
                  <div className="product-specs-table-wrapper">
                    <table className="product-specs-table">
                      <tbody>
                        {getProductSpecs(selectedProduct).map((spec, index) => (
                          <tr key={index} className="product-specs-row">
                            <td className="product-specs-key">{spec.key}</td>
                            <td className="product-specs-val">{spec.val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
