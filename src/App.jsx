import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutUs from './components/AboutUs';
import WhyUsPage from './components/WhyUsPage';
import GalleryPage from './components/GalleryPage';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import PlantationPage from './components/PlantationPage';
import Logo from './components/Logo';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [counterValue, setCounterValue] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Scroll to the top when navigating between pages
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  useEffect(() => {
    // Elegant automatic brand preloader timer
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Wait for shutters to slide open completely, then turn off initial load delays
      const loadTimer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 2000);
      return () => clearTimeout(loadTimer);
    }, 2200);

    // Dynamic cubic-ease out counter (0 to 100) tied to the 1.8s progress bar fill
    const end = 100;
    const duration = 1800; // 1.8s
    const startTime = performance.now();

    const animateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // smooth ease-out progress
      const easeProgress = 1 - Math.pow(1 - progress, 3); // cubic ease out
      const currentVal = Math.floor(easeProgress * end);
      
      setCounterValue(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);
    return () => clearTimeout(timer);
  }, []);

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
            <Hero onNavigate={setCurrentPage} isLoaded={!isLoading} />
            <About onNavigate={setCurrentPage} />
            <Certifications />
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
            <PlantationPage onBack={() => setCurrentPage('home')} />
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
            <ProductsPage onBack={() => setCurrentPage('home')} />
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
            <WhyUsPage onBack={() => setCurrentPage('home')} />
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
            <AboutUs onBack={() => setCurrentPage('home')} />
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
            <GalleryPage onBack={() => setCurrentPage('home')} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="preloader"
            className="website-preloader-container"
            exit={{ 
              pointerEvents: "none",
              transition: { delay: 1.4 } // Allow shutters to slide open completely first
            }}
          >
            {/* Split shutter curtains */}
            <motion.div 
              className="preloader-shutter left"
              initial={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.6 }}
            />
            <motion.div 
              className="preloader-shutter right"
              initial={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.6 }}
            />

            <div className="preloader-content">
              {/* Pulsing luxurious brand monogram */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="preloader-logo-wrapper"
              >
                <Logo className="preloader-logo-svg" style={{ filter: 'brightness(0) invert(1)' }} />
              </motion.div>
              
              {/* Elegant percentage counter */}
              <div className="preloader-counter-container">
                <motion.span 
                  className="preloader-counter-number"
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                >
                  {counterValue}%
                </motion.span>
              </div>

              {/* Thin gold progress bar */}
              <div className="preloader-progress-bar">
                <motion.div 
                  className="preloader-progress-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </div>

              {/* Tagline */}
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.4 } }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="preloader-tagline"
              >
                CRAFTING NATURE'S FINEST
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar onNavigate={setCurrentPage} isLoaded={!isLoading} />

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
