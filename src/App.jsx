import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutUs from './components/AboutUs';
import WhyUsPage from './components/WhyUsPage';
import GalleryPage from './components/GalleryPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import PlantationPage from './components/PlantationPage';
import Logo from './components/Logo';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const scrollTargetRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [counterValue, setCounterValue] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(false);
  const [productsResetCounter, setProductsResetCounter] = useState(0);

  const handleNavigate = (page, target = null) => {
    if (page === 'products-page') {
      setProductsResetCounter(prev => prev + 1);
    }
    if (page === currentPage && target) {
      const element = document.getElementById(target);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      scrollTargetRef.current = target;
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const target = scrollTargetRef.current;
    if (target) {
      let attempts = 0;
      let timeoutId;
      const checkAndScroll = () => {
        const element = document.getElementById(target);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          scrollTargetRef.current = null;
        } else if (attempts < 20) {
          attempts++;
          timeoutId = setTimeout(checkAndScroll, 50);
        } else {
          scrollTargetRef.current = null;
        }
      };
      timeoutId = setTimeout(checkAndScroll, 100);
      return () => clearTimeout(timeoutId);
    } else {
      // Scroll to the top when navigating between pages
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentPage]);

  // Preloader removed by request

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: isInitialLoad ? 0.97 : 1
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: isInitialLoad ? 0.8 : 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            <Hero onNavigate={handleNavigate} isLoaded={!isLoading} />
            <About onNavigate={handleNavigate} />
            <Contact />
            <Footer />
          </motion.div>
        );
      case 'plantation':
        return (
          <motion.div
            key="plantation"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            <PlantationPage onBack={() => handleNavigate('home')} />
            <Footer />
          </motion.div>
        );
      case 'products-page':
        return (
          <motion.div
            key="products-page"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            <ProductsPage 
              key={`products-${productsResetCounter}`} 
              onBack={() => handleNavigate('home')} 
            />
            <Footer />
          </motion.div>
        );
      case 'why-us-page':
        return (
          <motion.div
            key="why-us-page"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            <WhyUsPage onBack={() => handleNavigate('home')} />
            <Footer />
          </motion.div>
        );
      case 'about-us-page':
        return (
          <motion.div
            key="about-us-page"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            <AboutUs onBack={() => handleNavigate('home')} />
            <Footer />
          </motion.div>
        );
      case 'visuals-page':
        return (
          <motion.div
            key="visuals-page"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            <GalleryPage onBack={() => handleNavigate('home')} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigate} isLoaded={true} currentPage={currentPage} />

      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
      
      {/* Floating WhatsApp Button */}
      {!isLoading && (
        <a 
          href="https://wa.me/919400093627" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default App;
