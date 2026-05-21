import { motion } from 'framer-motion';
import { Sprout, Ship, HandHeart, Wind, Package, Flame } from 'lucide-react';
import './WhyChoose.css';

const features = [
  { icon: <Sprout size={32} />, title: 'Farm Fresh', desc: 'Directly sourced from organic farms at the peak of freshness.' },
  { icon: <Ship size={32} />, title: 'Export Quality', desc: 'Meeting the highest international standards for global shipping.' },
  { icon: <HandHeart size={32} />, title: 'Sustainably Sourced', desc: 'Supporting local ecosystems and fair trade practices.' },
  { icon: <Wind size={32} />, title: 'Aromatic & Pure', desc: 'Zero fillers or additives. Just the pure essence of nature.' },
  { icon: <Package size={32} />, title: 'Premium Packaging', desc: 'Hermetically sealed to lock in freshness and aroma.' },
  { icon: <Flame size={32} />, title: 'Authentic Flavor', desc: 'Traditional processing methods that respect the spice.' }
];

const WhyChoose = () => {
  return (
    <section className="why-choose" id="why-us">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">ADVANTAGES</span>
          <h2 className="section-title">The Abrams Standard</h2>
        </div>

        <div className="features-grid">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 120, rotateX: 30, rotateY: -15, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 14,
                delay: index * 0.12
              }}
              whileHover="hover"
              variants={{
                hover: {
                  y: -15,
                  scale: 1.03,
                  boxShadow: "0 25px 60px rgba(45, 27, 78, 0.25)"
                }
              }}
              whileTap={{ scale: 0.98 }}
              className="feature-card"
            >
              <motion.div 
                className="feature-icon-large"
                variants={{
                  hover: {
                    rotate: [0, -12, 10, -6, 4, 0],
                    scale: 1.15,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }
                }}
              >
                {item.icon}
              </motion.div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
