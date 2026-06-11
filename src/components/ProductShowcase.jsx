import { motion } from 'framer-motion';
import { Leaf, Award, Zap } from 'lucide-react';
import './ProductShowcase.css';

import cardamomImg from '../assets/cardamom.jpeg';
import blackPepperImg from '../assets/black_pepper.jpeg';
import coffeeImg from '../assets/coffee.jpeg';
import cloveImg from '../assets/clove.jpeg';
import nutmegImg from '../assets/nutmeg.jpeg';

const products = [
  {
    id: 'cardamom',
    title: 'Premium Cardamom',
    description: 'The queen of spices, our cardamom pods are hand-selected for their vibrant green color and intense aromatic profile. Sourced from high-altitude plantations.',
    image: cardamomImg,
    features: ['100% Natural', 'Handpicked Quality', 'Rich Aroma'],
    tags: ['Desserts', 'Tea', 'Baking']
  },
  {
    id: 'black-pepper',
    title: 'Premium Black Pepper',
    description: 'Known as "Black Gold," our peppercorns offer a bold heat and complex woody notes. Slow-dried to preserve their essential oils and medicinal properties.',
    image: blackPepperImg,
    features: ['Bold Flavor', 'Sun Dried', 'Export Quality'],
    tags: ['Steaks', 'Soups', 'Seasoning'],
    reversed: true
  },
  {
    id: 'clove',
    title: 'Premium Clove',
    description: 'Intensely aromatic and flavorful cloves, harvested at their peak. Essential for creating rich, deep spice blends and medicinal infusions.',
    image: cloveImg,
    features: ['High Purity', 'Sustainable', 'Aromatic'],
    tags: ['Curries', 'Mulled Wine', 'Spice Blends'],
    reversed: true
  },
  {
    id: 'nutmeg',
    title: 'Premium Nutmeg',
    description: 'Whole nutmeg seeds with their natural protective shell. Grate fresh for a sweet, nutty, and warm aroma that elevates any dish.',
    image: nutmegImg,
    features: ['Whole Seed', 'Authentic Flavor', 'Purest Form'],
    tags: ['Béchamel', 'Eggnog', 'Sweet Spices'],
    reversed: true
  }
];

const ProductShowcase = () => {

  return (
    <section className="showcase" id="products">
      <div className="container">
        <div className="section-header center">
          <h2 className="section-title">The Abrams Masterpieces</h2>
          <p className="section-description">A curated selection of nature's finest spices and coffee.</p>
        </div>

        {products.map((product) => (
          <div key={product.id} className={`product-section ${product.reversed ? 'reversed' : ''}`}>


            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="product-info"
            >
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.description}</p>
              
              <div className="product-features-mini">
                {product.features.map((feat, i) => (
                  <div key={i} className="mini-feat">
                    {i === 0 && <Leaf size={16} />}
                    {i === 1 && <Award size={16} />}
                    {i === 2 && <Zap size={16} />}
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="usage-tags">
                <span className="usage-label">Perfect For:</span>
                {product.tags.map(tag => (
                  <span key={tag} className="tag-card">{tag}</span>
                ))}
              </div>


            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
