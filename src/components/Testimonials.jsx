import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Artisan Baker',
    content: 'The aroma of Abrams cardamom is incomparable. It has completely transformed my signature pastries.',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Chef Julian',
    role: 'Michelin Star Chef',
    content: 'Purity is everything in my kitchen. Abrams black pepper provides a depth of flavor that is truly world-class.',
    image: 'https://i.pravatar.cc/150?u=julian'
  },
  {
    name: 'Elena Rossi',
    role: 'Home Connoisseur',
    content: 'Finding organic coffee that is both sustainable and delicious is rare. Abrams has become my daily ritual.',
    image: 'https://i.pravatar.cc/150?u=elena'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">REVIEWS</span>
          <h2 className="section-title">Trusted by Experts</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 14,
                delay: index * 0.15
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.025,
                boxShadow: "0 20px 45px rgba(45, 27, 78, 0.08)"
              }}
              whileTap={{ scale: 0.98 }}
              className="testimonial-card"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="quote-icon"
              >
                <Quote size={20} fill="currentColor" />
              </motion.div>
              <p className="testimonial-content">"{item.content}"</p>
              <div className="testimonial-author">
                <img loading="lazy" src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
